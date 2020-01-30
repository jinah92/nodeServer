const boardRouter = require('./routes/board');
const basketRouter = require('./routes/basket');
const logoutRouter = require('./routes/logout');
const loginRouter = require('./routes/login');
const indexRouter = require('./routes/index')
const contactRouter = require('./routes/contact');
const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));      // true : 배열이 원활히 파싱될 수 있음

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: "미녀 강사 전은수",
        cookie: {
            httpOnly: true,
            secure: false
        }
    })
);

app.use('/board', boardRouter);
app.use('/basket', basketRouter);
app.use('/logout', logoutRouter);
app.use('/login', loginRouter);
app.use('/contact', contactRouter);
app.use('/', indexRouter);


app.listen(3000, ()=>{
    console.log('node listen ...');
});