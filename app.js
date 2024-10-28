const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db.js');
const PORT = process.env.PORT || 5001;

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.get('/', (req, res) => {
  res.send('Social Media API is running...');
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})