import express from "express";

const app = express();

// tolong pelajari function callback 
app.get('/', (req, res) => {
    res.send('Welcome node js pertama anda'); 
})

// ini menggunakan function call back, yang mana setakah listen port 5000 gunakan call back "()=>consoloe.log('tesxt anda')"
app.listen(5000, () => console.log('Server runnning di port 5000'));