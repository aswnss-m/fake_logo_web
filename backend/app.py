from flask import Flask, request, jsonify, send_file, make_response
from flask_cors import CORS
from pymongo import MongoClient
from pymongo.server_api import ServerApi
from bson.objectid import ObjectId
from gridfs import GridFS
import src.RIS as ris
import json
import io

app = Flask(__name__)
CORS(app)

# Create a MongoDB client and connect to the server
uri = "mongodb+srv://risuser:risuser132@cluster0.upl04dc.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri, server_api=ServerApi('1'))
db = client['Cluster0']
fs = GridFS(db)


@app.route('/query/<file_id>', methods=['GET'])
def queryImage(file_id):
    # Convert the file_id to ObjectId
    file_id = ObjectId(file_id)

    # Find the corresponding file in the fs.files collection
    file_doc = db.fs.files.find_one({'_id': file_id})

    if file_doc is None:
        return jsonify({'message': 'Image not found'}), 404

    # Get the file metadata
    content_type = file_doc.get('metadata', {}).get('contentType')
    # filename = file_doc['filename']

    # Retrieve the associated chunks from the fs.chunks collection
    chunks = db.fs.chunks.find({'files_id': file_id}).sort('n')

    # Reconstruct the complete file from the chunks
    file_data = b''
    for chunk in chunks:
        file_data += chunk['data']

    # Create a BytesIO object to send the file data as a response
    file_stream = io.BytesIO(file_data)

    # Create a response object
    response = make_response(send_file(file_stream, mimetype=content_type))

    # Set the Content-Disposition header to specify the filename
    response.headers.set('Content-Disposition', 'attachment', filename="query_image.png")

    return response


@app.route('/postImage', methods=['POST'])
def getImage():
    if 'image' in request.files:
        image_file = request.files['image']
        
        # Save the image file to MongoDB using GridFS with metadata
        file_id = fs.put(image_file, metadata={'contentType': image_file.content_type})

        # Pass the image to the RIS file
        files = ris.search(image_file)
        # Convert float32 to float
        converted_data = [(name, float(value)) for name, value in files]

        # Convert the list of tuples to a dictionary
        dictionary = dict(converted_data)

        # Convert the dictionary to JSON
        json_data = json.dumps(dictionary)
        print(json_data)
        response = {'message': 'Image uploaded successfully',
                    'result': dictionary,
                    'file_id': str(file_id)}
        return jsonify(response), 200, {'Content-Type': 'application/json'}
    else:
        response = {'message': 'Image upload unsuccessful'}
        return jsonify(response), 400, {'Content-Type': 'application/json'}


@app.route("/")
def home():
    return "Hello"


# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
