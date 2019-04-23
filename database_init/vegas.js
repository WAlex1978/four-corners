const Location = require('../models/location');

const vegas = new Location({
    id: "vegas",
    name: "Las Vegas Strip",
    location: "Clark County, Nevada",
    desc: [
        `The Las Vegas Strip is a stretch of South Las Vegas Boulevard in Clark County, Nevada that is known for its 
        concentration of resort hotels and casinos. The Strip is approximately 4.2 miles (6.8 km) in length, located 
        immediately south of the Las Vegas city limits in the unincorporated towns of Paradise and Winchester. However, 
        the Strip is often referred to as being in Las Vegas.`,
        `Many of the largest hotel, casino, and resort properties in the world are located on the Strip. The 
        boulevard's cityscape is highlighted by its use of contemporary architecture, lights, and a wide variety 
        of attractions. Its hotels, casinos, restaurants, residential high-rises, entertainment offerings, and skyline 
        have established the Strip as one of the most popular and iconic tourist destinations in the world. 
        Most of the Strip has also been designated as an All-American Road and is considered a scenic route at night.`,
    ],
    ref: "https://en.wikipedia.org/wiki/Las_Vegas_Strip",
})

module.exports = vegas;