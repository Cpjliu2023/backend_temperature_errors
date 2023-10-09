// controllers/tempController.js
const express = require('express');
const TempModel = require('../models/tempModel');
const ErrorModel = require('../models/errorModel'); // Import the ErrorModel
const moment = require('moment');

const router = express.Router();

router.post('/temp', async (req, res) => {
  const { data } = req.body;

  // Validate data string
  const dataRegex = /^(\d+):(\d+):'Temperature':([+-]?([0-9]*[.])?[0-9]+)$/;
  const match = dataRegex.exec(data);

  if (!match) {
    // Save the incorrectly formatted data string to the 'errors' table
    await ErrorModel.addError(data);

    return res.status(400).json({ error: 'bad request' });
  }

  const deviceId = parseInt(match[1], 10);
  const epochMs = parseInt(match[2], 10);
  const temperature = parseFloat(match[3]);

  try {
    await TempModel.addTemp(deviceId, epochMs, temperature);

    if (temperature >= 90) {
      const formattedTime = moment(epochMs).format('YYYY/MM/DD HH:mm:ss');
      return res.json({
        overtemp: true,
        device_id: deviceId,
        formatted_time: formattedTime,
      });
    } else {
      return res.json({ overtemp: false });
    }
  } catch (error) {
    console.error('Error processing temperature:', error);
    res.status(500).json({ error: 'server error' });
  }
});

module.exports = router;
