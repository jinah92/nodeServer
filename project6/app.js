const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/login', (req, res)=>{
    const id = req.body.id;
    res.json({message: `${id}님, 오늘도 즐거운 시간 보내세요~!`});
});

app.listen(3000, ()=>{
    console.log("listen server...");
});