const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.Workout.find({})
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.post('/', (req, res) => {
    db.Workout.create(req.body)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.get('/range', (req, res) => {
    db.Workout.find({}, (err, data) => {
        if(err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
});


module.exports = router;