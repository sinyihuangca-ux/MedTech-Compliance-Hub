
import express from 'express';
import db from '../database/db.js';

const router = express.Router();

// GET /api/risks
// Retrieve all risk management records.
router.get('/', (req, res) => {
  try {
    const sql = `
      SELECT
        Risks.id,
        Risks.risk_code,
        Risks.product_id,
        Products.product_code,
        Products.product_name,
        Risks.hazard,
        Risks.hazardous_situation,
        Risks.severity,
        Risks.occurrence_probability,
        Risks.risk_controls,
        Risks.residual_risk,
        Risks.status
      FROM Risks
      JOIN Products
        ON Risks.product_id = Products.id
      ORDER BY Risks.id;
    `;

    const risks = db.prepare(sql).all();

    res.json(risks);
  } catch (error) {
    console.error('Error retrieving risk records:', error);

    res.status(500).json({
      error: 'Failed to retrieve risk management records.'
    });
  }
});

// GET /api/risks/:id
// Retrieve one risk record by its database ID.
router.get('/:id', (req, res) => {
  try {
    const sql = `
      SELECT *
      FROM Risks
      WHERE id = ?;
    `;

    const risk = db.prepare(sql).get(req.params.id);

    if (!risk) {
      return res.status(404).json({
        error: 'Risk record not found.'
      });
    }

    res.json(risk);
  } catch (error) {
    console.error('Error retrieving risk record:', error);

    res.status(500).json({
      error: 'Failed to retrieve the risk record.'
    });
  }
});

export default router;
