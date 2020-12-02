const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res) => {
    try {
        const result = await db.Workout.find({});
        res.json(result);
    } catch(err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const result = await db.Workout.create(req.body);
        res.json(result);
    } catch(err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        let savedWorkouts = [];
        const previousWorkout = await db.Workout.findById(req.params.id);
        savedWorkouts = previousWorkout.exercises;
        let allExercises = [...savedWorkouts, req.body];
        res.json(allExercises);
    } catch(err) {
        res.status(400).json(err);
    }
});

router.get('/range', async (req, res) => {
    try {
        const result = await db.Workout.find({});
        res.json(result);
    } catch(err) {
        res.status(400).json(err);
    }
});

module.exports = router;