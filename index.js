const express = require('express');
const path = require('path');
const cors = require('cors');
const photosRouter = require('./routes/photos');
const getPhotos = require(path.join(__dirname, './data/getPhotos'));

// Генерується масив даних
getPhotos();

const app = express();
app.listen(3000, () => console.log('Server is running'));

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Обробляє запити з "/photos"
app.use("/photos", photosRouter);