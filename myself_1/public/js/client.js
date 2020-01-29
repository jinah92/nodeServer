$(document).ready(function(){
    $('#login').click(function(){
        // alert('click');
        let login_form = `<div class="container-login">`;
        login_form += `<h4>펭수의 로그인 페이지</h4>`;
        login_form += `<form><div class="form-group">`;
        login_form += `<input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                       </div>`;
        login_form += `<div class="form-group">`;
        login_form += `<input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"></div>`;
        login_form += `<button type="submit" id="submit">제출</button></form>`;
        $('#img_div').html(login_form);
        
    });

    $(document).on('click', '#submit', function(){
        // alert('submit');
        const email = $('#email').val();
        const pwd = $('#pwd').val();
        const send_param = {email, pwd};    

        $.post('login', send_param, function(returnData){
            alert(returnData.message);
        });
    });
});