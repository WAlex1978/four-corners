const Location = require('./models/location');
require('./connection');

initLocations = async () => {
    try {
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

        const eiffel = new Location({
            id: "eiffel",
            image: "/images/eiffel.jpg",
            name: "Eiffel Tower",
            location: "Paris, France",
            desc: [
                `The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. 
                It is named after the engineer Gustave Eiffel, whose company designed and built the tower.`,
                `Constructed from 1887 to 1889 as the entrance to the 1889 World's Fair, it was initially 
                criticised by some of France's leading artists and intellectuals for its design, but it has become 
                a global cultural icon of France and one of the most recognisable structures in the world.
                The Eiffel Tower is the most-visited paid monument in the world; 6.91 million people ascended it in 2015.`,
                `The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and 
                the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. 
                During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made 
                structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished 
                in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial 
                at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). 
                Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after 
                the Millau Viaduct.`,
                `The tower has three levels for visitors, with restaurants on the first and second levels. 
                The top level's upper platform is 276 m (906 ft) above the ground – the highest observation deck 
                accessible to the public in the European Union. Tickets can be purchased to ascend by stairs or lift 
                to the first and second levels. The climb from ground level to the first level is over 300 steps, as is 
                the climb from the first level to the second. Although there is a staircase to the top level, it is 
                usually accessible only by lift.`
            ],
            ref: "https://en.wikipedia.org/wiki/Eiffel_Tower",
        })

        await eiffel.save();
    }
    catch (err) {
        console.log(err);
    }
}

initLocations();