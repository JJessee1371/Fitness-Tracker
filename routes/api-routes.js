const express = require('express');
const router = express.Router();
const Workouts = require('../models/models');


router.post('/api/workouts', (req, res) => {
    Workouts.create(req.body)
    .then(dbworkout => {
        res.json(dbworkout);
    })
    .catch(err => {
        console.log(err);
    });
});

module.exports = router;