import express from "express";
import {
    Register,
    getAllUser,
    login,
    updateUser
} from '../controllers/UserController.js';


const router = express.Router();


router.get('/',getAllUser);
router.post('/',Register);
router.post('/login',login);
router.patch('/update/:id',updateUser);
export default router;