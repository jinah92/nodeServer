function a(product){
    const send_param = {product};
    $.post('basket', send_param, function(returnData){
        alert(returnData.message);
        $('#basket_div').html(returnData.message);
    });
}

$(document).ready(function(){

    /* basic */
    $('#basic_btn').click(function(){
        a("basic");
    });

    $('#pro_btn').click(function(){
        a("pro");
    });

    $('#premium_btn').click(function(){
        a("premium");
    });


    $(document).on('click', '#logout_btn', function(){
        $.get('logout', function(returnData){
            alert(returnData.message);
            $('#login_div').show();
            $('#logout_div').hide();
        });
    });

    $('#login_btn').click(function(){
        const email=$('#login_email').val();
        const send_param = {email};
        $.post('login', send_param, function(returnData){
            alert(returnData.message);
            $('#logout_div').show();
            $('#login_div').hide();
            $('#login_form').html(logout_div_html);
        });
    });

    
    $('#contact_btn').click(function(){
        const name=$('#name').val();
        const email=$('#email').val();
        const comments=$('#comments').val();
        const send_param={name, email, comments};
        $.post('contacts', send_param, function(returnData){
            alert(returnData.message);
            $("#name").val("");
            $("#email").val("");
            $("#comments").val("");
        });
    });
});