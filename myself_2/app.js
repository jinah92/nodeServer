const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/login', (req, res)=>{
    const user = req.body.user;
    const pwd = req.body.pwd;
    res.json({message: user + "님, 환영힙니다."});
});

app.listen(3000, ()=>{
    console.log('mytest2, listen...'); 
});
