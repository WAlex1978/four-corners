const Location = require('./models/location');
require('./connection');

initLocations = async () => {
    try {
        const location = new Location({
            id: "pyramids",
            image: "/images/pyramids.jpg",
            name: "Great Pyramids",
            location: "Giza, Egypt",
            description: "The last of the Seven Wonders of the Ancient World standing, and more than 3,000 years old, the Great Pyramid rises 479 feet from a 754-feet square base. Scientists still don’t understand how the ancient Egyptians were able to move, carve and erect more than 2 million stone blocks, each weighing from 2 to 60 tons.",
        })

        const data = await location.save();
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}

initLocations();