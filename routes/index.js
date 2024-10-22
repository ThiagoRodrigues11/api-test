const router = require('express').Router();

// Controller imports
const { categoryController, productController } = require('../controllers');

// Category routes
router.get('/v1/Categories', categoryController.getAllCategories);
router.post('/v1/Categories', categoryController.createCategory);
router.get('/v1/Categories/:id', categoryController.getCategoryById);
router.put('/v1/Categories/:id', categoryController.updateCategory);
router.delete('/v1/Categories/:id', categoryController.deleteCategory);

// Product routes
router.get('/v1/products', productController.getAllProducts);
router.post('/v1/products', productController.createProduct);
router.get('/v1/products/:id', productController.getProductById);
router.put('/v1/products/:id', productController.updateProductById);
router.delete('/v1/products/:id', productController.deleteProductById);

module.exports = router;