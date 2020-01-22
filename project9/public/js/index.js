$(document).ready(function(){
    $('#title').click(function(){
        let login_form = `<input id="name" type="text" value="input id"><br>`;
        login_form +=  `<input id="pwd" type="password" value="input password"><br>`;
        login_form += `<input id="login_btn" type="button" value="login">`;
        $('#content').html(login_form);
    });

    $(document).on('click', '#login_btn', function(){
        const id = $('#name').val();
        const pw = $('#pwd').val();
        const param = {id, pw};

        $.post('login', param, function(returnData){
            alert(returnData.message);
        });
    });
});