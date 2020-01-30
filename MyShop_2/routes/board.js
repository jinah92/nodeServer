const express = require('express');
const con = require('./mysql_con');
const boardRouter = express.Router();

boardRouter.get('/read_form', (req, res, next)=>{ 
    const sql = `SELECT * FROM board`;
    con.query(sql, (err, result)=>{
        if(err){
            console.error(err);
        }else{
            console.log('board read OK');
            res.render('board_read_form', {title: "게시글 보기화면", result});
        }
    });
});

boardRouter.get('/write_form', (req, res, next)=>{
    res.render('board_write_form', {title: "글쓰기 화면"});
});

boardRouter.post('/write', (req, res, next)=>{
    if(req.session.email){ // 글쓰기 처리 
        const sql = `INSERT INTO board (m_no, title, content) VALUES (${req.session.m_no}, '${req.body.board_title}', '${req.body.board_content}')`;
        con.query(sql, (err, result)=>{
            if(err){
                console.error(err);
                res.json({message: `글 등록 실패`});
            }else{
                console.log('board insert OK');
                res.json({message: `글 등록 성공`});
            }
        });
    }else{
        res.json({message: "로그인부터 하세요."});
    }
});


module.exports = boardRouter;