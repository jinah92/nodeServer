$(document).ready(function(){
    $('#login_div').click(function(){
        let login_form = `<h2>Login</h2><br>`;
        login_form += `<input id="id" type="text" value="username"><br>`;
        login_form += `<input id="pw" type="text" value="password"><br>`;
        login_form += `<input id="login_btn" type="button" value="login">`;
        $('#text').html(login_form);
        
    });

    $(document).on('click', '#login_btn', function(){
        const id = $('#id').val();
        const pw = $('#pw').val();
        const param = {id, pw};
        
        $.post('login', param, function(returnData){
            alert(returnData.message);
            if(returnData.resultCode){
                let logout_form = `<div class="btn btn-danger">로그인 완료</div>`;
                $('#text').html(logout_form);
            } else {
                $('#id').val("");
                $('#pw').val("");
            }

        });
    });
});