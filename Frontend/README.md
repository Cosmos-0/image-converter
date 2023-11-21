# Image Format Converter

## About
The Image Format Converter is a web-based tool designed for easy and efficient conversion of image formats. Leveraging the power of React with Vite for the frontend and Node.js with Express and Sharp for the backend, this application provides a seamless experience for users to upload, convert, and download images in various formats.

## Features
- **Image Upload:** Users can upload images in common formats.
- **Format Conversion:** Convert images to popular formats like JPEG, PNG, and WebP.
- **Download Capability:** Download the converted images instantly after processing.

## Installation

Follow these steps to set up the Image Format Converter on your local machine:

### Prerequisites
- Node.js
- npm (usually bundled with Node.js)

### Setup
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/Cosmos-0/image-converter.git
   ```

2. **Install Backend and Frontend Dependencies:**
   ```sh
   npm install
   ```

### Running the Application
1. **Start the Backend Server:**
   ```sh
   # From the root directory
   nodemon server.js  # or 'node server.js'
   ```

2. **Start the Vite React App:**
   ```sh
   # In a new terminal, navigate to the frontend directory
   npm run dev
   ```

3. **Access the Application:**
   - The application should now be running on `localhost:5000` (or another port if 5000 is in use).

## Usage
- **Upload an Image:** Click the "Upload" button and choose an image file.
- **Choose Output Format:** Select the desired output format from the dropdown menu.
- **Convert and Download:** Press "Convert" to process and then download the converted image.

## Contributing
Contributions are welcome! Feel free to fork the repository, make changes, and submit pull requests for any improvements or bug fixes.

## License
This project is licensed under the [MIT License](LICENSE).
