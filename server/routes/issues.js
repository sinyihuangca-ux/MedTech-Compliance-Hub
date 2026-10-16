
import express from 'express';
import db from '../database/db.js';

const router = express.Router();

// GET /api/issues
// Retrieve all product issues.
router.get('/', (req, res) => {
  try {
    const sql = `
      SELECT
        ProductIssues.id,
        ProductIssues.issue_code,
        ProductIssues.product_id,
        Products.product_code,
        Products.product_name,
        ProductIssues.description,
        ProductIssues.discovery_date,
        ProductIssues.priority,
        ProductIssues.assigned_to,
        ProductIssues.corrective_action,
        ProductIssues.due_date,
        ProductIssues.status,
        ProductIssues.closure_date
      FROM ProductIssues
      JOIN Products
        ON ProductIssues.product_id = Products.id
      ORDER BY ProductIssues.id;
    `;

    const issues = db.prepare(sql).all();

    res.json(issues);
  } catch (error) {
    console.error('Error retrieving product issues:', error);

    res.status(500).json({
      error: 'Failed to retrieve product issues.'
    });
  }
});

// GET /api/issues/:id
// Retrieve one product issue by its database ID.
router.get('/:id', (req, res) => {
  try {
    const sql = `
      SELECT *
      FROM ProductIssues
      WHERE id = ?;
    `;

    const issue = db.prepare(sql).get(req.params.id);

    if (!issue) {
      return res.status(404).json({
        error: 'Product issue not found.'
      });
    }

    res.json(issue);
  } catch (error) {
    console.error('Error retrieving product issue:', error);

    res.status(500).json({
      error: 'Failed to retrieve the product issue.'
    });
  }
});

export default router;
