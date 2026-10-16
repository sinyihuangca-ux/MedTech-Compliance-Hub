
import express from 'express';

import productsRouter from './routes/products.js';
import testsRouter from './routes/tests.js';
import risksRouter from './routes/risks.js';
import projectsRouter from './routes/projects.js';
import issuesRouter from './routes/issues.js';

// Create the Express application.
const app = express();
const PORT = process.env.PORT || 5000;

// Parse incoming JSON request bodies.
app.use(express.json());

// Register API routes.
app.use('/api/products', productsRouter);
app.use('/api/tests', testsRouter);
app.use('/api/risks', risksRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/issues', issuesRouter);

// Basic health-check endpoint.
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'MedTech Compliance Hub API is running.'
  });
});

// Handle unknown routes.
app.use((req, res) => {
  res.status(404).json({
    error: 'API endpoint not found.'
  });
});

// Handle unexpected server errors.
app.use((err, req, res, next) => {
  console.error('Server error:', err);

  res.status(500).json({
    error: 'Internal server error.'
  });
});

// Start the server.
app.listen(PORT, () => {
  console.log(`MedTech Compliance Hub API running at http://localhost:${PORT}`);
});
