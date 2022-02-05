import express from "express";
import {
    getAllSalary,
} from '../controllers/SalaryController.js';


const router = express.Router();



router.get('/',getAllSalary );

export default router;