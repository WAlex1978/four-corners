const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('./connection');

const PORT = process.env.PORT || 5000;
const app = express();

const commentRouter = require('./routes/commentRouter');
const searchRouter = require('./routes/searchRouter');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	
	app.get('*', (req, res) => {
		res.sendFile(path.join(_dirname, 'client/build', 'index.html'));
	})
}

app.use('/api/comments/', commentRouter);
app.use('/api/search/', searchRouter);

module.exports = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});