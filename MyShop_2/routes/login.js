const con = require('./mysql_con');
const express = require('express');
const loginRouter = express.Router();

loginRouter.post('/', (req, res, next)=>{

  
    // if(err) throw err;  //DB 연결과정에서의 에러 처리
    const email=req.body.email;

    let sql = `SELECT * FROM members WHERE email = '${email}'`;
    con.query(sql, (err, result)=>{
        if(err){    //질의 과정에서의 에러 처리
            console.log(err);
            res.json({message: "다시 로그인해주세요"});
        }else{      //질의 성공
            
            if(result[0]){          //일치하는 이메일 있음
                const name = result[0].name;
                req.session.email = email;
                req.session.name = name;
                req.session.m_no = result[0].no;
                console.log(result);
                res.json({message: `${name}님 로그인 되었습니다.`});
        
            } else{                         //일치하는 이메일 없음
                //message = result.email;      //undefined
                console.log(result.email);
                res.json({message: "Please sign-up first!"});
            }
            
        }
        
    }); // end quary

});


module.exports = loginRouter;