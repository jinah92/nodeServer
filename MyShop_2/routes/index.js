const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', (req, res, next)=>{
    let logined = 0;    // 로그인 x 
    if(req.session.email){
        logined = 1;    // 로그인
    }
    res.render('index', {flag: logined, name: req.session.name});
});


module.exports = indexRouter;