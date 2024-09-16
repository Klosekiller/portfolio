import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Controller function for the home route
export const home = (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/index.html')); // Adjust path to the new location
};
