const express = require('express');
const router = express.Router();
const {contactRouter, members} = require('./contact');

/* const members = [
    {name: 'jinah', email: 'javascript@gmail.com', comments: 'fighting'},
    {name: 'Yoo', email: 'Yoos@naver.com', comments: 'haha'}
]; */


router.post('/', (req, res)=>{
    let message;
    const login_email = req.body.email;
    console.log(req.body);

    for (let i=0; i<members.length; i++){
        if(members[i].email == login_email){
            message = "login ok";
            req.session.email = req.body.email;
            //req.session.email = login_email;    // request에서의 email을 session에 저장
            // req.session.email = req.body.    
            const my_basket = [];
            req.session.basket = my_basket;
            break;
        }
    }
    if(!message){       // message가 undefined인 경우, (일치하는 이메일이 없는 경우)
        message = "login failed";
    }
        res.json({message});
});

module.exports = router;