const mysql = require('mysql');
const express = require('express');
const contactRouter = express.Router();
const members = require('./members');

contactRouter.post('/', (req, res, next)=>{

    var con = mysql.createConnection({  //연결 객체를 생성
        host: "localhost",
        user: "root",
        password: "mysql",
        port: "3307",
        database: "nodejs"
    });
    
    con.connect((err) => {     //연결 객체로 연결 시도 (연결되면 콜백함수 실행)
        if (err) throw err;
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
        });
    }); 

});


module.exports = contactRouter;