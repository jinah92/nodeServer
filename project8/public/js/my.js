$(document).ready(function(){
    $('#click_now').click(function(){
        let info = `ID<input id="user" type="text"><br>`;
        info += `PW<input id="password" tupe="password"><br>`;
        info += `<input id="login_button" type="button" value="login">`;

        $('#text_form').html(info);
    });

    $(document).on("click", "#login_button", function(){
        const user = $('#user').val();
        const pwd = $('#password').val();
        const param = {user, pwd};

        $.post('login', param, function(returnData){
            alert(returnData.message);
        });
    });
});