const Location = require('../models/location');

const hollywood = new Location({
    id: "hollywood",
    name: "Hollywood Sign",
    location: "Los Angeles, California",
    desc: [
        `The Hollywood Sign is an American landmark and cultural icon overlooking Hollywood, Los Angeles, California. 
        It is situated on Mount Lee, in the Hollywood Hills area of the Santa Monica Mountains.`,
        `"HOLLYWOOD" is spelled out in 45-foot (13.7 m)-tall white capital letters and is 352 feet (107.3 m) long. 
        The sign was originally created in 1923 as an advertisement for a local real estate development, but due to 
        increasing recognition, the sign was left up. The sign has been a frequent target of pranks and vandalism 
        across the decades, but it has since undergone restoration, including the installation of a security system 
        to deter vandalism. The sign is protected and promoted by The Hollywood Sign Trust, a nonprofit organization, 
        while its site and the surrounding land are part of Griffith Park.`,
        `The sign makes frequent appearances in popular culture, particularly in establishing shots for films and television 
        programs set in or around Hollywood. Signs of similar style, but spelling different words, are frequently seen as 
        parodies. The Hollywood Chamber of Commerce holds trademark rights to the Hollywood Sign.`
    ],
    ref: "https://en.wikipedia.org/wiki/Hollywood_Sign",
})

module.exports = hollywood;