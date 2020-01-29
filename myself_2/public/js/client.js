$(document).ready(function(){
    $('#login').click(function(){
        let login_form = `<h3>로그인 폼</h3>`;
        login_form += `<input id="user" type="text" value="Insert your ID" style="color: gray"><br>`;
        login_form += `<input id="pwd" type-"password" value="Insert your Password" style="color: gray" ><br>`;
        login_form += `<input class="btn" id="login_btn" type="submit" value="login">`;
        login_form += `<input class="btn" type="submit" value="new member">`;
        $('#content_div').html(login_form);
    });

    $(document).on('click', '#login_btn', function(){
        const user = $('#user').val();
        const pwd = $('#pwd').val();
        const send = {user, pwd};

        $.post('login', send, function(returnData){
            alert(returnData.message);
        });
    });
});