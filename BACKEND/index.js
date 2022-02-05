import express from "express";
import db from './config/database.js';
import prodcutRouter from './router/product.js';
import userRouter from './router/user.js';
import positionRouter from './router/position.js';
import absentRouter from './router/absent.js';
import leaveRouter from './router/leave.js';
import salaryRouter from './router/salary.js';
import cors from 'cors';

const app = express();

try {
    await db.authenticate();
    console.log('database conected');
} catch (error) {
    console.error('Connection Error : ', error); 
}


// tolong pelajari function callback dan ini sudah di pindahakn ke halaman router
// app.get('/', (req, res) => {
//     res.send('Welcome node js pertama anda'); 
// })

// untuk front end
app.use(cors());

// agar bisa create
app.use(express.json());

// app.use(prodcutRouter);// ini contoh awal 
// dan bisa tambahkan prefix nya 
app.use('/product', prodcutRouter);
app.use('/user', userRouter);
app.use('/position', positionRouter);
app.use('/absent', absentRouter);
app.use('/leave', leaveRouter);
app.use('/salary', salaryRouter);
// ini menggunakan function call back, yang mana setakah listen port 5000 gunakan call back "()=>consoloe.log('tesxt anda')"
app.listen(5000, () => console.log('Server runnning di port 5000'));