const { createCategoryService } = require('../services/categoriesService');
const categoriesService = require('../services/categoriesService');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    // {} abaixo por motivos de vai que
    const category = await createCategoryService(name);
    if (!name || name === '') {
      return res.status(400).json({ message: '"name" is required' });
    }
    if (!category) return res.status(409).json({ message: 'error ao cadastrar usuário' });
    return res.status(201).json(category);
  } catch (err) {
    return res.status(400).json({ message: '"name" is required' });
  }
};

const getCategories = async (_req, res) => {
  try {
    const categories = await categoriesService.getCategories();
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createCategory,
  getCategories,
};
