import express from "express";
import { createLeave, getAllLeave, getLeaveById, updateLeave } from '../controllers/LeaveController.js';


const router = express.Router();



router.get('/',getAllLeave );
router.get('/:id',getLeaveById );
router.post('/',createLeave );
router.patch('/:id',updateLeave);
// router.delete('/:id',deleteProduct);

export default router;