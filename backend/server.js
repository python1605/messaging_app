// PARSE .ENV
require('dotenv').config();

// Configuring the database
require('./app/config/database');

const express = require('express');
const { createServer } = require('http');
const helmet = require('helmet');
const cors = require('cors');

// Import routes
const appRoutes = require('./app/routers/index');

// create express app
const app = express();

// Setup middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Serve static files
app.use(express.static('./app/Schema'));
app.use('/assets/images', express.static('assets/images'));
app.use('/assets/folders', express.static('assets/folders'));

// Allow requests from http://localhost:5173
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(helmet());
// Routes
app.use(appRoutes);

// Setup server port
const port = process.env.PORT || 7500;
const httpServer = createServer(app);

httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
