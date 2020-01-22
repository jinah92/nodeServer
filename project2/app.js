const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.post("/login", (req, res)=>{
    const id = req.body.id;
    const pw = req.body.pw;
    res.json({message: id + "님, 로그인되셨습니다."});
});

app.listen(3000, ()=>{
    console.log("3000 port listen");
});