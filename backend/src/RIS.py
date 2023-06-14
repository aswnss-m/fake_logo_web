from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.applications.vgg16 import preprocess_input
from tensorflow.keras.applications.vgg16 import VGG16
from PIL import Image
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# Load pre-trained VGG16 model without the classification layers
base_model = VGG16(weights='imagenet', include_top=False, input_shape=(224, 224, 3))

# Function to process the images
def get_feature_vector(img):
    image = Image.open(img)
    if image.mode == 'RGBA':
        image = image.convert('RGB')
    image = image.resize((224, 224))
    x = img_to_array(image)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)
    features = base_model.predict(x)
    feature_vector = features.flatten()
    return feature_vector

import os
# get the current path of the file
path = os.getcwd()
# get the path of the csv file
# get the path of the numpy file
def search(image):
    try:
        df = pd.read_csv("./src/combined_annotations.csv")
        feature_vectors = np.load("./src/combined_features.npy")
        # Get the feature vector of the image
        feature_vector = get_feature_vector(image)

        # Load the feature vectors of the images in the database
        
        # Compute cosine similarity between the query image and all images in the database
        similarity_scores = cosine_similarity(feature_vector.reshape(1, -1), feature_vectors)
        sorted_indices = np.argsort(similarity_scores)[0][::-1]
        
        filenames = list(df['Label'])
        k = 10
        top_k_indices = sorted_indices[:k]
        similar_images = []
        for index in top_k_indices:
            similar_image_path = filenames[index]  # Assuming filenames contains the paths of the images
            similarity_score = similarity_scores[0][index]
            similar_images.append((similar_image_path, similarity_score))
        
        return similar_images
    except Exception as e:
        print(e)
        return None
