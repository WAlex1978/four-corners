const Location = require('../models/location');

const familia = new Location({
    id: "familia",
    name: "La Sagrada Familia",
    location: "Barcelona, Spain",
    desc: [
        `The Temple Expiatori de la Sagrada Família agrada Familia is a large unfinished Roman Catholic church in 
        Barcelona, designed by Catalan architect Antoni Gaudí (1852–1926). Gaudí's work on the building 
        is part of a UNESCO World Heritage Site. In November 2010 Pope Benedict XVI consecrated the church 
        and proclaimed it a minor basilica.`,
        `In 1882, construction of Sagrada Família started under architect Francisco de Paula del Villar. In 1883, 
        when Villar resigned, Gaudí took over as chief architect, transforming the project with his architectural and 
        engineering style, combining Gothic and curvilinear Art Nouveau forms. Gaudí devoted the remainder of his life to 
        the project, and he is buried in the crypt. At the time of his death at age 73 in 1926, when he was run down by a 
        tram, less than a quarter of the project was complete.`,
        `Relying solely on private donations, Sagrada Familia's construction progressed slowly and was interrupted by the 
        Spanish Civil War. In July 1936, revolutionaries set fire to the crypt and broke their way into the workshop, partially 
        destroying Gaudí's original plans, drawings and plaster models, which led to 16 years work to piece together the 
        fragments of the master model. Construction resumed to intermittent progress in the 1950s. Advancements in 
        technologies such as computer aided design and computerised numerical control (CNC) have since enabled faster 
        progress and construction past the midpoint in 2010. However, some of the project's greatest challenges remain, 
        including the construction of ten more spires, each symbolising an important Biblical figure in the New Testament. 
        It is anticipated that the building can be completed by 2026—the centenary of Gaudí's death.`,
        `The basilica has a long history of dividing the citizens of Barcelona: over the initial possibility it might compete 
        with Barcelona's cathedral, over Gaudí's design itself, over the possibility that work after Gaudí's death 
        disregarded his design, and the 2007 proposal to build a tunnel of Spain's high-speed rail link to France which could 
        disturb its stability.[14] Describing Sagrada Família, art critic Rainer Zerbst said "it is probably impossible to find 
        a church building anything like it in the entire history of art", and Paul Goldberger describes it as "the most 
        extraordinary personal interpretation of Gothic architecture since the Middle Ages".`
    ],
    ref: "https://en.wikipedia.org/wiki/Sagrada_Familia",
})

module.exports = familia;