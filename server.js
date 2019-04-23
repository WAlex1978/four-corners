const express = require ('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
require('./connection');

const PORT = process.env.PORT || 5000;
const app = express();

const commentRouter = require('./routes/commentRouter');
const searchRouter = require('./routes/searchRouter');
const authRouter = require('./routes/authRouter');
const visitedRouter = require('./routes/visitedRouter');
const userRouter = require('./routes/userRouter');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
	
	app.get('*', (req, res) => {
		res.sendFile(path.join(_dirname, 'client/build/index.html'));
	})
}

app.use('/api/comments/', commentRouter);
app.use('/api/search/', searchRouter);
app.use('/api/auth/', authRouter);
app.use('/api/visited/', visitedRouter);
app.use('/api/user/', userRouter);

module.exports = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});