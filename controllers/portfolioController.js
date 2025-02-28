const Portfolio = require('../models/portfolioModel');

// Create a new portfolio
const createPortfolio = async (req, res) => {
  const { title, description, img, codeLink, liveLink } = req.body;

  try {
    const portfolio = new Portfolio({
      title,
      description,
      img,
      codeLink,
      liveLink,
      user: req.user._id
    });

    const savedPortfolio = await portfolio.save();
    res.status(201).json(savedPortfolio);
  } catch (error) {
    res.status(500).json({ message: 'Error creating portfolio' });
  }
};

// Get all portfolios for a user
const getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find({ user: req.user._id });
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching portfolios' });
  }
};

// Update a portfolio by ID
const updatePortfolio = async (req, res) => {
  const { id } = req.params;

  try {
    const portfolio = await Portfolio.findById(id);

    if (!portfolio) return res.status(404).json({ message: 'Portfolio not found' });
    if (portfolio.user.toString() !== req.user._id.toString()) return res.status(401).json({ message: 'Unauthorized' });

    const updatedPortfolio = await Portfolio.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedPortfolio);
  } catch (error) {
    res.status(500).json({ message: 'Error updating portfolio' });
  }
};

// Delete a portfolio by ID
const deletePortfolio = async (req, res) => {
  const { id } = req.params;

  try {
    const portfolio = await Portfolio.findById(id);

    if (!portfolio) return res.status(404).json({ message: 'Portfolio not found' });
    if (portfolio.user.toString() !== req.user._id.toString()) return res.status(401).json({ message: 'Unauthorized' });

    await portfolio.remove();
    res.json({ message: 'Portfolio removed' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting portfolio' });
  }
};

module.exports = { createPortfolio, getPortfolios, updatePortfolio, deletePortfolio };
