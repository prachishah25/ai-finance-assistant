const express = require('express'); // Import the Express framework
const cors = require('cors'); // Import CORS to handle cross-origin requests

// Initialize the app
const app = express();

// Middleware
app.use(cors()); // Enable cross-origin requests
app.use(express.json()); // Parse JSON in incoming requests

// Test route
app.get('/', (req, res) => {
  res.send('Hello, Backend is working!');
});

// Start the server
const PORT = 5000; // Define the port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
