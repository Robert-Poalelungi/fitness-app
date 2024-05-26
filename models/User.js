const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    workouts: [{
        date: { type: Date, required: true },
        exercises: [{
            exerciseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' },
            sets: { type: Number, required: true },
            reps: { type: Number, required: true },
            weight: { type: Number, required: true }
        }]
    }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
