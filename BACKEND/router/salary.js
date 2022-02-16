import express from "express";
import {
    getAllSalary, updateSalary,
} from '../controllers/SalaryController.js';


const router = express.Router();



router.get('/',getAllSalary );
router.patch('/:id',updateSalary );

export default router;