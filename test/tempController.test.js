const request = require('supertest');
const app = require('../app'); // Import your Express app
const TempModel = require('../models/tempModel');
const ErrorModel = require('../models/errorModel');

let server;

beforeEach(() => {
  server = app.listen();
});

afterEach(async () => {
    // Clear the 'errors' table
    await request(app).delete('/errors');
  
    // Close the Express app server
    server.close();
});
  
  

describe('POST /temp', () => {
  it('should add temperature data and return success for valid data', async () => {
    const response = await request(server)
      .post('/temp')
      .send({ data: '365951380:1640995229697:\'Temperature\':58.48256793121914' });

    expect(response.status).toBe(200);
    expect(response.body.overtemp).toBe(false);
  });

  it('should return error for invalid data', async () => {
    const response = await request(server)
      .post('/temp')
      .send({ data: 'invalid-data-string' });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('bad request');
  });

  it('should return overtemp true for temperature >= 90', async () => {
    const response = await request(server)
      .post('/temp')
      .send({ data: '123456:1640995229697:\'Temperature\':90.5' });

    expect(response.status).toBe(200);
    expect(response.body.overtemp).toBe(true);
  });

  it('should return overtemp false for temperature < 90', async () => {
    const response = await request(server)
      .post('/temp')
      .send({ data: '789012:1640995229697:\'Temperature\':75.2' });

    expect(response.status).toBe(200);
    expect(response.body.overtemp).toBe(false);
  });

  // Add more test cases as needed
});

describe('GET /errors', () => {
  it('should return all incorrectly formatted data strings', async () => {
    await ErrorModel.addError('invalid-data-string-1');
    await ErrorModel.addError('invalid-data-string-2');
    await ErrorModel.addError('invalid-data-string-3');

    const response = await request(server).get('/errors');

    expect(response.status).toBe(200);
    expect(response.body.errors).toHaveLength(3);
    expect(response.body.errors).toContain('invalid-data-string-1');
    expect(response.body.errors).toContain('invalid-data-string-2');
    expect(response.body.errors).toContain('invalid-data-string-3');
  });

  it('should return an empty array if there are no errors', async () => {
    const response = await request(server).get('/errors');

    expect(response.status).toBe(200);
    expect(response.body.errors).toHaveLength(0);
  });

  // Add more test cases for error handling and edge cases
});
