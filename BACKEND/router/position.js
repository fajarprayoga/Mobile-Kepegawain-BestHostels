import express from "express";
import {
    createPosition,
    getAllPosition,
    getPositionById,
    updatePosition,
    deletePosition
} from '../controllers/PositionController.js';


const router = express.Router();

router.get('/',getAllPosition );
router.get('/:id',getPositionById );
router.post('/',createPosition );
router.patch('/:id',updatePosition );
router.patch('/delete/:id',deletePosition );

export default router;