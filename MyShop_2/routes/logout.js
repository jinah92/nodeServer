const express = require('express');
const logoutRouter = express.Router();

logoutRouter.post('/', (req, res, next)=>{
    req.session.destroy(()=>{
        res.json({message: "로그아웃 완료"});
    });
});


module.exports = logoutRouter;