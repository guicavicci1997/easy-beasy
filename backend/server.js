const express  = require('express');
const cors  = require('cors');
const bodyParser  = require('body-parser');
const mongoose  = require('mongoose');
const Question  = require('./routes/question');

const app = express();
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/questions', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => console.log('Connection opened with MongoDB.'));

Question(router);

app.use('/', router);

app.listen(4000, () => console.log(`Server running on port 4000!`)); 