const Location = require('../models/location');

const fuji = new Location({
    id: "fuji",
    name: "Mount Fuji",
    location: "Honshu, Japan",
    desc: [
        `Mount Fuji located on Honshū, is the highest volcano in Japan at 3,776.24 m (12,389 ft), 2nd-highest peak of an 
        island (volcanic) in Asia, and 7th-highest peak of an island in the world. It is a dormant stratovolcano that last 
        erupted in 1707–1708. Mount Fuji lies about 100 kilometers (60 mi) south-west of Tokyo, and can be seen from 
        there on a clear day. Mount Fuji's exceptionally symmetrical cone, which is snow-capped for about 5 months a year, 
        is a well-known symbol of Japan and it is frequently depicted in art and photographs, as well as visited by sightseers 
        and climbers.`,
        `Mount Fuji is one of Japan's "Three Holy Mountains" along with Mount Tate and Mount Haku. It is also a Special Place 
        of Scenic Beauty and one of Japan's Historic Sites. It was added to the World Heritage List as a Cultural Site on 
        June 22, 2013. According to UNESCO, Mount Fuji has "inspired artists and poets and been the object of pilgrimage 
        for centuries". UNESCO recognizes 25 sites of cultural interest within the Mount Fuji locality. These 25 locations 
        include the mountain and the Shinto shrine, Fujisan Hongū Sengen Taisha, as well as the Buddhist Taisekiji Head Temple 
        founded in 1290, later immortalized by Japanese ukiyo-e artist Katsushika Hokusai.`,
    ],
    ref: "https://en.wikipedia.org/wiki/Mount_Fuji",
})

module.exports = fuji;