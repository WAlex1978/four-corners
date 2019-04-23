const connection = require('./connection');
const cloudinary = require('cloudinary').v2;

const pyramids = require('./database_init/pyramids');
const eiffel = require('./database_init/eiffel');
const hollywood = require('./database_init/hollywood');
const familia = require('./database_init/familia');
const palace = require('./database_init/palace');
const fuji = require('./database_init/fuji');
const london = require('./database_init/london');
const vegas = require('./database_init/vegas');
const khalifa = require('./database_init/khalifa');

initLocations = async () => {
    try {

        // Upload avatar
        await cloudinary.uploader.upload('./images/avatar.png', options={folder: 'avatar'});
        
        // Upload location images
        const pyramidsImg = await cloudinary.uploader.upload('./images/pyramids.jpg', options = {folder: 'locations'});
        const eiffelImg = await cloudinary.uploader.upload('./images/eiffel.jpg', options = {folder: 'locations'});
        const hollywoodImg = await cloudinary.uploader.upload('./images/hollywood.jpg', options = {folder: 'locations'});
        const familiaImg = await cloudinary.uploader.upload('./images/familia.jpg', options = {folder: 'locations'});
        const palaceImg = await cloudinary.uploader.upload('./images/palace.jpg', options = {folder: 'locations'});
        const fujiImg = await cloudinary.uploader.upload('./images/fuji.jpg', options = {folder: 'locations'});
        const londonImg = await cloudinary.uploader.upload('./images/london.jpg', options = {folder: 'locations'});
        const vegasImg = await cloudinary.uploader.upload('./images/vegas.jpg', options = {folder: 'locations'});
        const khalifaImg = await cloudinary.uploader.upload('./images/khalifa.jpg', options = {folder: 'locations'});

        // Define image url
        pyramids.image = pyramidsImg.url;
        eiffel.image = eiffelImg.url;
        hollywood.image = hollywoodImg.url;
        familia.image = familiaImg.url;
        palace.image = palaceImg.url;
        fuji.image = fujiImg.url;
        london.image = londonImg.url;
        vegas.image = vegasImg.url;
        khalifa.image = khalifaImg.url;

        // Save to database
        await pyramids.save();
        await eiffel.save();
        await hollywood.save();
        await familia.save();
        await palace.save();
        await fuji.save();
        await london.save();
        await vegas.save();
        await khalifa.save();

        connection.close();
        console.log("Database Initialized");
    }
    catch (err) {
        console.log(err);
    }
}

initLocations();