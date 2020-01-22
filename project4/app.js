const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/login', function(req, res){
    const id = req.body.id;
    const pw =req.body.pw;
    res.json({message: `${id}님 환영합니다. 당신의 비밀번호는:${pw}`});
    
});

app.listen(3000, ()=>{
    console.log('server Ready');
});
