const experss = require("express");
const session = require("express-session");
const path = require("path");
const app = experss();
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const {contactRouter, members} = require('./routes/contact');
const basketRouter = require('./routes/basket');

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: "Hello MyServer",
        cookie: {
            httpOnly: true,
            secure: false
        }
    })
);


/* const members = [
    {name: 'jinah', email: 'javascript@gmail.com', comments: 'fighting'},
    {name: 'Yoo', email: 'Yoos@naver.com', comments: 'haha'}
]; */

app.use(experss.static(path.join(__dirname, 'public')));
app.use(experss.json());
app.use(experss.urlencoded({extended:true}));

app.use('/logout', logoutRouter);

app.use('/login', loginRouter);

app.use('/contacts', contactRouter);

app.use('/basket', basketRouter);

app.listen(3000, ()=>{
    console.log("(my shop) Server Ready...");
});