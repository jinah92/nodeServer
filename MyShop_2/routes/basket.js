const con = require('./mysql_con');
const express = require('express');
const basketRouter = express.Router();

basketRouter.post('/', (req, res, next)=>{

        console.log("Connected!");

        //basket 처리
        if(req.session.email){ //basket insert 처리
            var sql = `INSERT INTO basket (m_no, product, quantity) VALUES (${req.session.m_no}, '${req.body.product}', ${req.body.quantity})`;
           
            con.query(sql, (err, result) => {
                if (err) {              //err (시스템 에러)
                    console.log("Baskect Insert failed", err);
                    res.json({message: "장바구니 처리 실패"});
    
                } else {
                    console.log("1 record inserted");
                    res.json({message: `${req.session.name} 님의 장바구니에 담겼습니다.`});
                }    
            }); // end quary

        }else{ //login 권고
            res.json({message: "로그인 먼저 하세요!"});
        }


}); //end post


module.exports = basketRouter;