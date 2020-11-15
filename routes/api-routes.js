const express = require('express');
const router = express.Router();

router.post('/api/workouts', (req, res) => {
    Workouts.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;