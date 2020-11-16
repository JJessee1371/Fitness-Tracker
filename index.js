//Application requirements and NPM packages
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 3000;
const apiRoutes = require(path.join(__dirname, './routes/api-routes'));
const htmlRoutes = require(path.join(__dirname, './routes/html-routes'));

//Use routing files
app.use(apiRoutes);
app.use(htmlRoutes);

//Log route requests
app.use(logger('dev'));

//Data parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Contents of public folder staticly served
app.use(express.static('public'));

//Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dbworkout', { useNewUrlParser: true });

//Server litening for activity
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});