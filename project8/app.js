const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.post('/login', (req, res)=>{
    const id = req.body.user;
    res.json({message: `${id}님, 안녕하십니까?`});
});

app.listen(3000, ()=>{
    console.log("Wake up!");
});