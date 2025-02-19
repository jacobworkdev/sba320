# Vite Lorem Picsum React App

## Description
This is a React application built using Vite that allows users to fetch and display random images from the Lorem Picsum API. Users can specify image dimensions, apply grayscale and blur effects, and fetch random images with different settings.

## Features
- Fetch images from the Lorem Picsum API.
- Specify width and height for images.
- Apply grayscale and blur effects.
- Fetch images using a specific seed.
- Fetch new random images with each request.
- Responsive and user-friendly interface.

## Technologies Used
- React
- Vite
- React Router
- CSS for styling
- Fetch API for retrieving images

## Usage
1. Open the app in your browser.
2. Enter the desired width and height.
3. Optionally, apply grayscale or blur effects.
4. Click the "Search" button to fetch an image based on your criteria.
5. Click the "Random Image" button to fetch a completely random image.
6. Navigate to the "About" page to learn more about the app.


## API Reference
- **Base URL:** `https://picsum.photos/`
- Fetch a random image: `https://picsum.photos/{width}/{height}`
- Fetch a specific image: `https://picsum.photos/id/{id}/{width}/{height}`
- Apply grayscale: `?grayscale`
- Apply blur: `?blur={1-10}`
- Fetch images using a seed: `https://picsum.photos/seed/{seed}/{width}/{height}`

## License
This project is licensed under the MIT License.