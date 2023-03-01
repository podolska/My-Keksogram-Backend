const express = require('express');
const path = require('path');
const fs = require('fs/promises');
const {v4} = require('uuid');
const router = express.Router();

const upload = require('../middlewares/multer');

router.get("", async (req, res) => {
    
    const getPhotos = async () => {
        const filePath = path.join(__dirname, '../data/photos.txt');
        const photosData = await fs.readFile(filePath, 'utf-8');
        return photosData;
    };

    getPhotos().then(data => {
        res.json({
            status: 'success',
            code: 200,
            data: {
                result: JSON.parse(data)
            } 
        });    
    }).catch(error => console.log(error));
    
});

router.post("/new", upload.single('image'), async(req, res) => {
    const {path: tempDir, originalname} = req.file;
    const newUpload = path.join(__dirname, '../public', 'photos', originalname);
    try {
        await fs.rename(tempDir, newUpload);
        const newPhoto = {
            id: v4(),
            photo: path.join("photos", originalname),
            description: req.body.description,
            likes: 0,
            comments: []
        };  
        res.status(201).json(newPhoto);   
    } catch (error) {
        await fs.unlink(tempDir);
    }
});

module.exports = router;