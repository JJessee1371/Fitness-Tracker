const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    
    type: {
        type: String,
        trim: true,
        required: 'Workout type is required'
    },

    name: {
        type: String,
        trim: true,
        required: 'Name is required'
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
});

const Workouts = mongoose.model('Workouts', WorkoutSchema);

module.exports = Workouts;