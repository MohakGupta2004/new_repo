const express = require('express');

// Create an Express app
const app = express();

// Define a route handler for the root path ('/')
app.get('/', (req, res) => {
  // Send a simple HTML response
  res.send('<h1>HELLO WELCOME TO KGEC HACKATHON</h1>');
});

// Define a custom error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server and listen on port 3000
const port = process.env.PORT || 3000; // Use environment variable or default
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
