
import express from 'express';
import db from '../database/db.js';

const router = express.Router();

// GET /api/products
// Retrieve all medical device products.
router.get('/', (req, res) => {
  try {
    const sql = `
      SELECT *
      FROM Products
      ORDER BY id;
    `;

    const products = db.prepare(sql).all();

    res.json(products);
  } catch (error) {
    console.error('Error retrieving products:', error);

    res.status(500).json({
      error: 'Failed to retrieve products.'
    });
  }
});

// GET /api/products/:id
// Retrieve one product by its database ID.
router.get('/:id', (req, res) => {
  try {
    const sql = `
      SELECT *
      FROM Products
      WHERE id = ?;
    `;

    const product = db.prepare(sql).get(req.params.id);

    if (!product) {
      return res.status(404).json({
        error: 'Product not found.'
      });
    }

    res.json(product);
  } catch (error) {
    console.error('Error retrieving product:', error);

    res.status(500).json({
      error: 'Failed to retrieve the product.'
    });
  }
});

export default router;
