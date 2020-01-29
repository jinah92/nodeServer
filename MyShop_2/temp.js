const mysql = require('mysql');

var con = mysql.createConnection({  //연결 객체를 생성
    host: "localhost",
    user: "root",
    password: "mysql",
    port: "3307",
    database: "nodejs"
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");

    //회원가입 처리
    var sql = "INSERT INTO members (name, email, comments) VALUES ('유상필', 'yoos@naver.com', 'mine')";
    con.query(sql, (err, result) => {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });

con.connect((err)=> {
    if (err) throw err;
    let message;
    var sql = `SELECT '${email}' from members`;
    con.query(sql, (err, result, field)=>{
        if(err) throw err;
        for(let i=0; i<sql.length; i++){
            if(result[i].email == req.body.email){
                req.session.email = req.body.email;
                message = "login OK!!";
                break;
            }
        }
        if(!message){
            message = "login Faild...";
        }
        req.json({message});
    });
});