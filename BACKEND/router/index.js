import express from "express";
import {
    getAllProduct,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} from '../controllers/ProductController.js';


const router = express.Router();



router.get('/',getAllProduct );
router.get('/:id',getProductById );
router.post('/',createProduct );
router.patch('/:id',updateProduct);
router.delete('/:id',deleteProduct);

export default router;