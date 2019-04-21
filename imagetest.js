const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dmuuoo1bl',
    api_key: '912542241166517',
    api_secret: 'FuDkvegm7zRvb4v8ZmuL8mh9oSQ',
})

upload = async () => {
    try {
    const data = await cloudinary.uploader.upload('./client/public/images/familia.jpg');
    console.log(data);
    }
    catch (err) {
        console.log(err)
    }
}

upload();