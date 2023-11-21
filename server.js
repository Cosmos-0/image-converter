import express from 'express';
import multer from 'multer';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import cors from 'cors';
import pngToIco from 'png-to-ico';


const app = express();
const upload = multer({ dest: 'uploads/' });
const __dirname = path.dirname(fileURLToPath(import.meta.url));


app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

app.post('/convert', upload.single('image'), async (req, res) => {
  const format = req.body.format;
  const outputPath = `output.${format}`;

  try {
    await sharp(req.file.path)
      .toFormat(format)
      .toFile(outputPath);

    res.sendFile(path.join(__dirname, outputPath), (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).send('Error sending file');
      }
      fs.unlinkSync(req.file.path); // Delete the original file
      fs.unlinkSync(outputPath);    // Delete the converted file after sending
    });
  } catch (error) {
    console.error('Error during image conversion:', error);
    res.status(500).send('Error during image conversion');
    fs.unlinkSync(req.file.path); // Ensure original file is deleted even on error
  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});