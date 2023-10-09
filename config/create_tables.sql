-- Create a table for temperature data
CREATE TABLE IF NOT EXISTS temperatures (
  id SERIAL PRIMARY KEY,
  device_id INT NOT NULL,
  epoch_ms BIGINT NOT NULL,
  temperature DOUBLE PRECISION NOT NULL,
  formatted_time TIMESTAMP
);

-- Create a table for error logs
CREATE TABLE IF NOT EXISTS errors (
  id SERIAL PRIMARY KEY,
  data_string TEXT NOT NULL
);
