$(document).ready(function(){
    $('#welcome_div').click(function(){
        alert();
        let login_form = `<h2>Login</h2><br>`;
        login_form += `ID<input id="usr"><br>`;
        login_form += `PW<input id="pwd" type="password"><br>`;
        login_form += `<input id="login_btn" type="button" value="login">`;
        $('#login_result').html(login_form);
    });

    $(document).on('click', '#login_btn', function(){
        const id = $('#usr').val();
        const pwd = $('#pwd').val();
        const send_param = {id, pwd};
        $.post("login", send_param, function(resultData){
            alert(resultData.message);
        });
    });
});