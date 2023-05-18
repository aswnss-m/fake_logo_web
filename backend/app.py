from flask import *
from flask import request
import src.get_image as get_image
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/postImage', methods=['GET', 'POST'])
def getImage():
    if request.method == 'GET':
        return 'Hi'
    elif request.method == 'POST':
        if 'image' in request.files:
            image_file = request.files['image']
            image_file.save('./image.png')
            response = {'message': 'Image uploaded successfully'}
            return jsonify(response), 200, {'Content-Type': 'application/json'}
        else:
            response = {'message': 'Image upload unsuccessfully'}
            return jsonify(response), 400, {'Content-Type': 'application/json'}


@app.route("/")
def home():
    return "Hello"

if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0")