const express = require('express');
const { getExercises, fetchAndStoreExercises } = require('../controllers/exerciseController');
const router = express.Router();

router.get('/', getExercises);
router.post('/fetch', fetchAndStoreExercises);

module.exports = router;
