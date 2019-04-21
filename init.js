const connection = require('./connection');
const cloudinary = require('cloudinary').v2;

const pyramids = require('./database_init/pyramids');
const eiffel = require('./database_init/eiffel');
const hollywood = require('./database_init/hollywood');
const familia = require('./database_init/familia');

initLocations = async () => {
    try {

        // Upload images
        const pyramidsImg = await cloudinary.uploader.upload('./images/pyramids.jpg', options = {folder: 'locations'});
        const eiffelImg = await cloudinary.uploader.upload('./images/eiffel.jpg', options = {folder: 'locations'});
        const hollywoodImg = await cloudinary.uploader.upload('./images/hollywood.jpg', options = {folder: 'locations'});
        const familiaImg = await cloudinary.uploader.upload('./images/familia.jpg', options = {folder: 'locations'});

        // Define image url
        pyramids.image = pyramidsImg.url;
        eiffel.image = eiffelImg.url;
        hollywood.image = hollywoodImg.url;
        familia.image = familiaImg.url;

        // Save to database
        await pyramids.save();
        await eiffel.save();
        await hollywood.save();
        await familia.save();
        connection.close();

        console.log("Database Initialized");
    }
    catch (err) {
        console.log(err);
    }
}

initLocations();