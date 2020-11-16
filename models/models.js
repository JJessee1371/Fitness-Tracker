const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Workout Schema
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },

    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: true
            },

            name: {
                type: String,
                trim: true,
                required: true
            },

            duration: {
                type: Number,
                trim: true
            },

            weight: {
                type: Number,
                trim: true
            },

            reps: {
                type: Number,
                trim: true
            },

            sets: {
                type: Number,
                trim: true
            },

            distance: {
                type: Number,
                trim: true
            }
        }
    ] 
});

const Workouts = mongoose.model('Workouts', WorkoutSchema);

module.exports = Workouts;