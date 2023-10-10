# Backend Service for Temperature Monitoring

This is a backend service for monitoring temperature data from various devices. It provides API endpoints to record temperature readings and manage error logs.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This backend service is designed to handle temperature data recorded from various devices. It offers a set of API endpoints for recording temperature readings and managing error logs. The service ensures that data is correctly formatted and tracks devices with over-temperature readings.

## Features

- Accepts temperature data in a specific format.
- Detects and records incorrectly formatted data.
- Checks for over-temperature readings and tracks devices with over-temperature events.
- Provides endpoints for listing incorrectly formatted data and clearing error logs.

## Getting Started

Follow these instructions to set up and run the backend service on your local development environment.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/backend-service.git
   cd backend-service

    Install dependencies:
        npm install

2. Usage
    API Endpoints
    POST /temp: Record temperature data in the specified format. Returns information about over-temperature events.

    Example request body:
    {
    "data": "365951380:1640995229697:'Temperature':58.48256793121914"
    }
    GET /errors: Retrieve a list of incorrectly formatted data strings.

    DELETE /errors: Clear the error logs.

3. Configuration
    Configuration settings such as database credentials should be stored in environment variables. Create a .env file and define the following variables:

    DB_USER=your_db_user
    DB_HOST=your_db_host
    DB_NAME=your_db_name
    DB_PASSWORD=your_db_password

    Load these variables in your application using a package like dotenv.

4. Database Setup
    The backend service uses a PostgreSQL database. You can set up the required tables by running the SQL script provided in create_tables.sql. Execute the script with psql or a similar tool.

5. Testing
    To run tests, use the following command:
    npm test

6. Contributing
    If you'd like to contribute to this project, please follow the contributing guidelines.





