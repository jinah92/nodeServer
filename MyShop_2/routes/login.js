const mysql = require('mysql');
const express = require('express');
const loginRouter = express.Router();

loginRouter.post('/', (req, res, next)=>{
    var con = mysql.createConnection({  //연결 객체를 생성
        host: "localhost",
        user: "root",
        password: "mysql",
        port: "3307",
        database: "nodejs"
    });

    con.connect((err)=> {
        if(err) throw err;  //DB 연결과정에서의 에러 처리
        const email=req.body.email;

        let sql = `SELECT * FROM members WHERE email = '${email}'`;
        con.query(sql, (err, result)=>{
            if(err){    //질의 과정에서의 에러 처리
                res.json({message: "다시 로그인해주세요"});
            }else{      //질의 성공
                
                if(result.length > 0){          //일치하는 이메일 있음
                    const name = result[0].name;
                    req.session.email = email;
                    req.session.name = name;
                    console.log(result);
                    res.json({message: `${name}님 로그인 되었습니다.`});
            
                } else{                         //일치하는 이메일 없음
                    //message = result.email;      //undefined
                    console.log(result.email);
                    console.log(result.email);
                    res.json({message: "Please sign-up first!"});
                }
                
            }
           

        });

    });

});


module.exports = loginRouter;