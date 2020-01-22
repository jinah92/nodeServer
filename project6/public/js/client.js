$(document).ready(function(){
    $('#express').click(function(){
        // alert();
        let login_form = `<h1>Please Login Now!!</h1>`;
        login_form += `<input id="username" type="text" value="enter your name" style="color: gray;"><br>`;
        login_form += `<input id="password" type="password" value="enter your password" style="color: gray"><br>`;
        login_form += `<input id="login_click" type="button" value="login">`;
        $('#login_form').html(login_form);
    });

    $(document).on("click", "#login_click", function(){
        const id = $('#username').val();
        const pw = $('#password').val();
        // alert(id + ' : ' + pw);
        const pram = {id, pw};

        $.post('login', pram, function(returnData){
            alert(returnData.message);
        });

    });
});