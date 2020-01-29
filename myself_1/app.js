const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/login', (req, res)=>{
    const email = req.body.email;
    const pwd = req.body.pwd;
    res.json({message: "당신의 이메일: " + email + "\n당신의 비밀번호: " + pwd});
});

app.listen(3000, ()=>{
    console.log('3000: jinah server listen...')
});
