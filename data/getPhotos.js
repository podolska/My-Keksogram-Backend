const fs = require("fs/promises");
const path = require('path');

// Шлях до файлу, де будуть зберігатись згенеровані дані
const filePath = path.join(__dirname, 'photos.txt');


async function getPhotos () {

    let serverData = [];

    for (let i = 1; i < 26; i++) {
        const data = {
            "id": i,
            "photo": `photos/${i}.jpg`,
            "description": "Тестим новую камеру! =)",
            "likes": (Math.floor(Math.random() * (550 - 5)) + 5),
            "comments": [
                {
                    "text": "Мега фото! Просто очманіти. Як вам так удалося?",
                    "name": "Mark",
                    "avatar": "avatars/avatar-4.svg" 
                },
                {
                    "text": "Так це фотошоп!!!!!!!!",
                    "name": "Alex",
                    "avatar": "avatars/avatar-3.svg"
                },
                {
                    "text": "Немає слів!!! Яка краса )))",
                    "name": "Тарас",
                    "avatar": "avatars/avatar-6.svg"
                },
                {
                    "text": "Кольори супер! Шо за камера?!",
                    "name": "Аліна",
                    "avatar": "avatars/avatar-1.svg"
                },
                {
                    "text": "Гарно же як...",
                    "name": "Ivan",
                    "avatar": "avatars/avatar-2.svg"
                },
                {
                    "text": "Життя - гарна штука, як не крути!",
                    "name": "Орест",
                    "avatar": "avatars/avatar-5.svg"
                },
                {
                    "text": "Непогано-непогано...)))))))))",
                    "name": "Надія",
                    "avatar": "avatars/avatar-6.svg"
                },
                {
                    "text": "Фотографу - респект, вдало впіймав кадр!",
                    "name": "Mark",
                    "avatar": "avatars/avatar-3.svg"
                }
            ]
        };
        serverData.push(data);
    };
    // Додає згенеровані дані до файлу photos.txt
    await fs.writeFile(filePath, JSON.stringify(serverData));
};

module.exports = getPhotos;
