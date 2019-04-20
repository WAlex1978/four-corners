const connection = require('./connection');

const pyramids = require('./database_init/pyramids');
const eiffel = require('./database_init/eiffel');
const hollywood = require('./database_init/hollywood');

initLocations = async () => {
    try {
        await hollywood.save();
        connection.close();
    }
    catch (err) {
        console.log(err);
    }
}

initLocations();