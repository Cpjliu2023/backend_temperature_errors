// models/tempModel.js
const db = require('../config/dbConfig');

class TempModel {
  static async addTemp(deviceId, epochMs, temperature) {
    const formattedTime = new Date(epochMs).toISOString();
    const query = {
      text: 'INSERT INTO temperatures(device_id, epoch_ms, temperature, formatted_time) VALUES($1, $2, $3, $4)',
      values: [deviceId, epochMs, temperature, formattedTime],
    };

    try {
      await db.query(query);
    } catch (error) {
      console.error('Error adding temperature:', error);
      throw error;
    }
  }
}

module.exports = TempModel;
