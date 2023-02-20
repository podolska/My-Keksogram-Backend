const express = require('express');
const path = require('path');
const fs = require('fs/promises');

const router = express.Router();

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

module.exports = router;