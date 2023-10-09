// controllers/errorsController.js
const express = require('express');
const ErrorModel = require('../models/errorModel');

const router = express.Router();

router.get('/errors', async (req, res) => {
  try {
    // Fetch all error strings from the 'errors' table
    const errors = await ErrorModel.getErrors();
    const errorStrings = errors.map((error) => error.data_string);

    // Return the error strings in the specified format
    res.json({ errors: errorStrings });
  } catch (error) {
    console.error('Error fetching errors:', error);
    res.status(500).json({ error: 'server error' });
  }
});

router.delete('/errors', async (req, res) => {
  try {
    await ErrorModel.clearErrors();
    res.json({ message: 'Errors cleared successfully' });
  } catch (error) {
    console.error('Error clearing errors:', error);
    res.status(500).json({ error: 'server error' });
  }
});

module.exports = router;
