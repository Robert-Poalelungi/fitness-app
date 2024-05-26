const axios = require('axios');
const Exercise = require('../models/Exercise');

const fetchAndStoreExercises = async (req, res) => {
    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/exercises', {
            headers: { 'X-Api-Key': process.env.API_KEY }
        });

        const exercises = response.data;

        // Salvează exercițiile în baza de date
        await Exercise.insertMany(exercises);
        res.status(201).json({ message: 'Exercises fetched and stored successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching exercises', error });
    }
};

const getExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.json(exercises);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching exercises', error });
    }
};

module.exports = {
    fetchAndStoreExercises,
    getExercises
};
