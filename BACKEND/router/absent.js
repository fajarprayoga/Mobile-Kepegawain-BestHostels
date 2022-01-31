import express from "express";
import { createAbsent, getAbsentById, getAllAbsent, updateAbsent } from '../controllers/AbsenstController.js';


const router = express.Router();



router.get('/',getAllAbsent );
router.get('/:id',getAbsentById );
router.post('/',createAbsent );
router.patch('/:id',updateAbsent);
// router.delete('/:id',deleteProduct);

export default router;