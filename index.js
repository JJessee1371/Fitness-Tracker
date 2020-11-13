const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const routes = require(path.join(__dirname, './routes/routing'));
const PORT = process.env.PORT || 3000;

//Require Mongoose models
const Workout = require('./models/models');

//Data parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Contents of public folder staticly served
app.use(express.static('public'));

//Use the routes folder
app.use(routes);

//Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dbWorkout', { useNewUrlParser: true });

//Server litening for activity
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});