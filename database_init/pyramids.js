const Location = require('../models/location');

const pyramids = new Location({
    id: "pyramids",
    image: "/images/pyramids.jpg",
    name: "Great Pyramids",
    location: "Giza, Egypt",
    desc: [
        `The Great Pyramid of Giza is the oldest and largest of the three pyramids in the Giza pyramid complex 
        bordering present-day El Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, 
        and the only one to remain largely intact.`,
        `Based on a mark in an interior chamber naming the work gang 
        and a reference to the fourth dynasty Egyptian Pharaoh Khufu, some Egyptologists believe that the 
        pyramid was thus built as a tomb over a 10- to 20-year period concluding around 2560 BC. 
        Initially at 146.5 metres (481 feet), the Great Pyramid was the tallest man-made structure in 
        the world for more than 3,800 years until Lincoln Cathedral was finished in 1311 AD. Originally, 
        the Great Pyramid was covered by limestone casing stones that formed a smooth outer surface; what 
        is seen today is the underlying core structure. Some of the casing stones that once covered the 
        structure can still be seen around the base. There have been varying scientific and alternative 
        theories about the Great Pyramid's construction techniques. Most accepted construction hypotheses 
        are based on the idea that it was built by moving huge stones from a quarry and dragging and lifting 
        them into place.`,
        `There are three known chambers inside the Great Pyramid. The lowest chamber is cut 
        into the bedrock upon which the pyramid was built and was unfinished. The so-called Queen's Chamber 
        and King's Chamber are higher up within the pyramid structure. The main part of the Giza complex 
        is a set of buildings that included two mortuary temples in honour of Khufu (one close to the pyramid 
        and one near the Nile), three smaller pyramids for Khufu's wives, an even smaller "satellite" pyramid, 
        a raised causeway connecting the two temples, and small mastaba tombs surrounding the pyramid for nobles.`
    ],
    ref: "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza",
})

module.exports = pyramids;