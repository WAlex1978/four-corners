const Location = require('../models/location');

const palace = new Location({
    id: "palace",
    name: "Grand Palace",
    location: "Bangkok, Thailand",
    desc: [
        `The Grand Palace are a complex of buildings at the heart of Bangkok, Thailand. The palace has been the official 
        residence of the Kings of Siam (and later Thailand) since 1782. The king, his court, and his royal government were 
        based on the grounds of the palace until 1925. King Bhumibol Adulyadej (Rama IX), resided at the Chitralada Royal 
        Villa and his successor King Vajiralongkorn (Rama X) at the Amphorn Sathan Residential Hall, both in the Dusit Palace, 
        but the Grand Palace is still used for official events. Several royal ceremonies and state functions are held within 
        the walls of the palace every year. The palace is one of the most popular tourist attractions in Thailand.`,
        `Construction of the palace began on 6 May 1782, at the order of King Phutthayotfa Chulalok (Rama I), the founder of 
        the Chakri Dynasty, when he moved the capital city from Thonburi to Bangkok. Throughout successive reigns, many 
        new buildings and structures were added, especially during the reign of King Chulalongkorn (Rama V). By 1925, 
        the king, the Royal Family and the government were no longer permanently settled at the palace, and had moved to 
        other residences. After the abolition of absolute monarchy in 1932, all government agencies completely moved out of 
        the palace.`,
        `In shape, the palace complex is roughly rectangular and has a combined area of 218,400 square metres (2,351,000 sq ft), 
        surrounded by four walls. It is situated on the banks of the Chao Phraya River at the heart of the Rattanakosin Island, 
        today in the Phra Nakhon District. The Grand Palace is bordered by Sanam Luang and Na Phra Lan Road to the north, 
        Maharaj Road to the west, Sanam Chai Road to the east and Thai Wang Road to the south.`,
        `Rather than being a single structure, the Grand Palace is made up of numerous buildings, halls, pavilions set around 
        open lawns, gardens and courtyards. Its asymmetry and eclectic styles are due to its organic development, with additions 
        and rebuilding being made by successive reigning kings over 200 years of history. It is divided into several 
        quarters: the Temple of the Emerald Buddha; the Outer Court, with many public buildings; the Middle Court, including 
        the Phra Maha Monthien Buildings, the Phra Maha Prasat Buildings and the Chakri Maha Prasat Buildings; the Inner Court 
        and the Siwalai Gardens quarter. The Grand Palace is currently partially open to the public as a museum, but it remains 
        a working palace, with several royal offices still situated inside.`
    ],
    ref: "https://en.wikipedia.org/wiki/Grand_Palace",
})

module.exports = palace;