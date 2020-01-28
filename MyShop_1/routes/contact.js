const express = require('express');
const contactRouter = express.Router();

const members = [
    {name: 'jinah', email: 'javascript@gmail.com', comments: 'fighting'},
    {name: 'Yoo', email: 'Yoos@naver.com', comments: 'haha'}
];

contactRouter.post('/', (req, res)=>{
    members.push(req.body);
    console.log(members);
    res.json({message: "contact OK"});
});

module.exports = {contactRouter, members};