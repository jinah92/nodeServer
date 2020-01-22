$(document).ready(function(){
    $("#hello_h1").click(function(){
        let login_form = `<input id="user" type="text" value="input ID"><br>`;
        login_form += `<input id="pwd" type="password"><br>`;
        login_form += `<input id="login_btn" type="button" value="login">`;
        $('#text').html(login_form);
    });

    $(document).on("click", "#login_btn", function(){
        const id = $('#user').val();
        const pw = $('#pwd').val();
        const parameter = {id, pw};

        $.post('login', parameter, function(returnData){
            alert(returnData.message);
        });
    });
});