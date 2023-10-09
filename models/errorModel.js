// models/errorModel.js
const db = require('../config/dbConfig');

// Define the table name for the entire module
const tableName = 'errors';

class ErrorModel {
  static async addError(dataString) {
    const query = {
      text: `INSERT INTO ${tableName}(data_string) VALUES($1)`,
      values: [dataString],
    };
  
    try {
      await db.query(query.text, query.values);
      console.log('Error added successfully');
    } catch (error) {
      console.error('Error adding error:', error);
      throw error;
    }
  }

  static async getErrors() {
    const query = {
      text: `SELECT * FROM ${tableName}`,
    };

    try {
      const result = await db.query(query.text);
      return result.rows;
    } catch (error) {
      console.error('Error fetching errors:', error);
      throw error;
    }
  }

  static async clearErrors() {
    const query = {
      text: `DELETE FROM ${tableName}`,
    };

    try {
      await db.query(query.text);
    } catch (error) {
      console.error('Error clearing errors:', error);
      throw error;
    }
  }
}

module.exports = ErrorModel;
