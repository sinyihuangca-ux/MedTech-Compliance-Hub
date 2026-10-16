
import express from 'express';
import db from '../database/db.js';

const router = express.Router();

// GET /api/tests
// Retrieve all safety testing records.
router.get('/', (req, res) => {
  try {
    const sql = `
      SELECT
        SafetyTests.id,
        SafetyTests.test_code,
        SafetyTests.product_id,
        Products.product_code,
        Products.product_name,
        SafetyTests.test_type,
        SafetyTests.standard,
        SafetyTests.start_date,
        SafetyTests.completion_date,
        SafetyTests.result,
        SafetyTests.status
      FROM SafetyTests
      JOIN Products
        ON SafetyTests.product_id = Products.id
      ORDER BY SafetyTests.id;
    `;

    const tests = db.prepare(sql).all();

    res.json(tests);
  } catch (error) {
    console.error('Error retrieving safety tests:', error);

    res.status(500).json({
      error: 'Failed to retrieve safety testing records.'
    });
  }
});

// GET /api/tests/:id
// Retrieve one safety testing record by its database ID.
router.get('/:id', (req, res) => {
  try {
    const sql = `
      SELECT *
      FROM SafetyTests
      WHERE id = ?;
    `;

    const test = db.prepare(sql).get(req.params.id);

    if (!test) {
      return res.status(404).json({
        error: 'Safety testing record not found.'
      });
    }

    res.json(test);
  } catch (error) {
    console.error('Error retrieving safety test:', error);

    res.status(500).json({
      error: 'Failed to retrieve the safety testing record.'
    });
  }
});

export default router;
