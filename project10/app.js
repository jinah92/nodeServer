const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();

const user_data = {id:"a", pw:"b"};

// app.use(미들웨어) => app에서 미들웨어를 사용하겠다.
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// 세션 생성
app.use(session({
    resave: false,              // 요청이 왔을 때 세션에 수정사항이 생기지 않아도 세션을 다시 저장할지 여부
    saveUninitialized: true,    // ture: 세션 ID 고정 (처음에 할당받은 세션 ID를 그대로 사용)
    secret: 'secret code',      // 암호화 키 설정(세션 정보의 노출 방지)
    cookie: {
        httpOnly: true,         // true: 클라이언트에서 쿠키 확인 불가
        secure: false,          // false: https가 아닌 환경에서도 사용 가능
    }
}));

app.post('/login',(req,res)=>{
    console.log("login처리:"+req.headers.cookie);
    console.log(req.session);
    const id=req.body.id;
    const pw=req.body.pw;
    if( (id == user_data.id) && (pw == user_data.pw)){        
        req.session.logined_user_id=id;         // 이름 = 값
        res.json({resultCode:1, message:`${id}님 로그인 되셨습니다.`});
    }else{
        res.json({resultCode:0, message:`다시 로그인하세요`});
    }    
});

app.post('/basket',(req,res)=>{
    console.log("basket처리:"+req.headers.cookie);
    console.log("basket 처리2: " + req.body.product);
    console.log(req.session);
    
    const product=req.body.product;
    // const product2=req.body.product2;
    
    if( req.session.logined_user_id){//로그인 되어있는 사용자
        if(!req.session.basket){//장바구니가 없을 때
            req.session.basket=[];
        }
        req.session.basket.push(product);
        res.json({resultCode:1, message:`${req.session.logined_user_id}님의 장바구니에 ${product}가 담겼습니다.`});
        
    }else{
        res.json({resultCode:0, message:`로그인부터 하세요`});
    }    
});

app.post('/basket_view',(req,res)=>{
    console.log("basket_view 처리:"+req.headers.cookie);
    console.log(req.session);    
    
    if( req.session.logined_user_id){//로그인 되어있는 사용자
        let basket;
        if(req.session.basket){//장바구니가 있을 때
            basket=req.session.basket.join(',');
            req.session.basket=[];
            res.json({resultCode:1, message:basket});
        }else{
            res.json({resultCode:0, message:`장바구니가 비었습니다`});
        }    
        
    }else{
        res.json({resultCode:0, message:`로그인부터 하세요`});
    }    
});

app.post('/logout',(req,res)=>{
    console.log("logout 처리:"+req.headers.cookie);
    console.log(req.session);    
    
    req.session.destroy(()=>{
        console.log("세션이 파기 되었습니다");
        res.json({resultCode:1, message:`로그아웃 되었습니다`});
    });
});


app.listen(3000,()=>{
    console.log("server ready...");
});