
import express from 'express';
import db from '../database/db.js';

const router = express.Router();

// GET /api/projects
// Retrieve all compliance projects.
router.get('/', (req, res) => {
  try {
    const sql = `
      SELECT
        Projects.id,
        Projects.project_code,
        Projects.product_id,
        Products.product_code,
        Products.product_name,
        Projects.project_name,
        Projects.owner,
        Projects.start_date,
        Projects.planned_completion_date,
        Projects.actual_completion_date,
        Projects.status,
        Projects.notes
      FROM Projects
      JOIN Products
        ON Projects.product_id = Products.id
      ORDER BY Projects.id;
    `;

    const projects = db.prepare(sql).all();

    res.json(projects);
  } catch (error) {
    console.error('Error retrieving projects:', error);

    res.status(500).json({
      error: 'Failed to retrieve compliance projects.'
    });
  }
});

// GET /api/projects/:id
// Retrieve one project by its database ID.
router.get('/:id', (req, res) => {
  try {
    const sql = `
      SELECT *
      FROM Projects
      WHERE id = ?;
    `;

    const project = db.prepare(sql).get(req.params.id);

    if (!project) {
      return res.status(404).json({
        error: 'Project not found.'
      });
    }

    res.json(project);
  } catch (error) {
    console.error('Error retrieving project:', error);

    res.status(500).json({
      error: 'Failed to retrieve the project.'
    });
  }
});

export default router;
