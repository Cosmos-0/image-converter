import React, { useState } from 'react';
import './App.css'; // Make sure to import the Tailwind CSS

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [format, setFormat] = useState('jpeg');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormatChange = (event) => {
    setFormat(event.target.value);
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('format', format);

    setIsLoading(true);

    try {
      const response = await fetch('https://image-converter-cpmqhxysm-cosmos-0s-projects.vercel.app/convert', {
        method: 'POST',
        body: formData,
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${selectedFile.name.slice(0,selectedFile.name.lastIndexOf('.'))}.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Image Format Converter</h1>
        <input type="file" onChange={handleFileChange} className="my-4" />
        <select value={format} onChange={handleFormatChange} className="my-4">
          <option value="jpeg">JPEG</option>
          <option value="png">PNG</option>
          <option value="webp">WebP</option>
          <option value="webp">GIF</option>
          <option value="webp">AVIF</option>
        </select>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={isLoading}
        >
          {isLoading ? 'Converting...' : 'Convert'}
        </button>
      </header>
    </div>
  );
}

export default App;
