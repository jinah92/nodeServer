const con = require('./mysql_con');
const express = require('express');
const contactRouter = express.Router();

contactRouter.post('/', (req, res, next)=>{
    
        console.log("Connected!");

        //회원가입 처리
        const name=req.body.name;
        const email=req.body.email;
        const comments=req.body.comments;

        var sql = `INSERT INTO members (name, email, comments) VALUES ('${name}', '${email}', '${comments}')`;
        con.query(sql, (err, result) => {
            if (err) {              //err (시스템 에러)
                console.log("Insert failed", err);
                res.json({message: "회원가입 실패"});

            } else {
                console.log("1 record inserted");
                res.json({message: "회원가입 되었습니다."});
            }

            con.end();

        }); // end quary
        

});


module.exports = contactRouter;