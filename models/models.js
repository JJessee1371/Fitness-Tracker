const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },

    type: {
        type: String,
        trim: true
    },

    weight: {
        type: Number,
        trim: true
    },

    sets: {
        type: Number,
        trim: true
    },

    reps: {
        type: Number,
        trim: true
    },

    duration: {
        type: String,
        trim: true
    }
});

const Workout = mongoose.model('Workouts', WorkoutSchema);

module.exports = Workout;