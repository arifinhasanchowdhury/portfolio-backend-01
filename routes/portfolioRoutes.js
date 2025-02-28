const express = require('express');
const { createPortfolio, getPortfolios, updatePortfolio, deletePortfolio } = require('../controllers/portfolioController');
const router = express.Router();

router.post('/', createPortfolio);      // POST /api/portfolio
router.get('/', getPortfolios);         // GET /api/portfolio
router.put('/:id', updatePortfolio);    // PUT /api/portfolio/:id
router.delete('/:id', deletePortfolio); // DELETE /api/portfolio/:id

module.exports = router;
