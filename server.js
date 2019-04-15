const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const app = express();

const commentRouter = require('./routes/commentRouter');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
else {
	require('dotenv').config();
}

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true});
mongoose.connection.on('error', error => console.log(error));
mongoose.connection.once('open', () => console.log("Connected to Mongoose"));

app.get('*', (req, res) => {
	res.sendFile(path.join(_dirname, 'client/build', 'index.html'));
})


app.use('/api/comments/', commentRouter);

module.exports = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});