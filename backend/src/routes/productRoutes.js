// productRoutes.js
import express from 'express';
const router = express.Router();
import { getAllProducts } from '../controllers/productController';

router.get('/products', getAllProducts);

export default router;