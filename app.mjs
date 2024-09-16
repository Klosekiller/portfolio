// Import necessary modules
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Initialize the Express app
const app = express();

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Get the current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up middleware
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Set up views engine (if using one like EJS or Pug)
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug'); // Example for Pug

// Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
import mainRoutes from './src/routes/mainRoutes.mjs'; // Adjust path as needed

// Use the routes
app.use('/', mainRoutes);

// Catch-all route for handling 404 errors
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
