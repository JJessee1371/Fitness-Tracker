const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const Workouts = require('./models/models');
const apiRoutes = require(path.join(__dirname, './routes/api-routes'));
const htmlRoutes = require(path.join(__dirname, './routes/html-routes'));

//Use routing files
app.use(apiRoutes);
app.use(htmlRoutes);

//Data parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Contents of public folder staticly served
app.use(express.static('public'));

//Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dbWorkout', { useNewUrlParser: true });

//Routing 
app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/exercise.html'));
});

app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/stats.html'));
});

app.post('/api/workouts', (req, res) => {
    Workouts.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

//Server litening for activity
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});