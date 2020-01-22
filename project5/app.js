const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended : false}));

// 요청, 응답 
app.post('/login',(req, res)=>{
    const id = req.body.id;
    res.json({message: `${id}님, 로그인하셨어요`});
});

app.listen(3000, ()=>{
    console.log("Server Listen 3000");
});