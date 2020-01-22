$(document).ready(function(){
    $('#click_div').click(function(){
/*         let login_form = `ID<input id="id"><br>`;
        login_form += `PW<input id="pw" type="password"><br>`;
        login_form += `<input id="login_btn" type="button" value="login">`;
         */

        let login_form = '<div class="container"><h2>Log In</h2>';
        login_form += '<p>서비스를 이용하려면 로그인 하세요</p>';
        login_form += '<form action="">';
        login_form += '<div class="form-group"><label for="usr">Name:</label><input type="text" class="form-control" id="id" name="username"></div>';
        login_form += '<div class="form-group"><label for="pwd">Password:</label><input type="password" class="form-control" id="pw" name="password"></div>';
        login_form += '<button type="submit" class="btn btn-primary" id="login_btn" value="login">Submit</button><br>';
        login_form += `<input type="checkbox" class="custom-control-input" id="customCheck" name="example1"><label class="custom-control-label" for="customCheck">ID 기억하기</label></form></div></div> `;

        $("#login_div").html(login_form);

    });

    $(document).on('click', '#login_btn', function(){
        const id = $('#id').val();
        const pw = $('#pw').val();
        const send_param = {id, pw};
        $.post('login', send_param, function(returnData){
            alert(returnData.message);
        });
        // alert(id + ':' + pw);
    });
});