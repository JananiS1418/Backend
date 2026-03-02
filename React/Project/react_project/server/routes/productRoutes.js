import express from 'express';
const router = express.Router();
import { getProducts, addProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

router.get('/', getProducts);
router.post('/', protect, isAdmin, addProduct);
router.put('/:id', protect, isAdmin, updateProduct);
router.delete('/:id', protect, isAdmin, deleteProduct);

export default router;
