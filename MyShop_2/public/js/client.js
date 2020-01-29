$(document).ready(function(){

    $('#login_btn').click(function(){   
        const email = $('#login_email').val();
        const sendParam = {email};
        $.post('login', sendParam, function(returnData){
            alert(returnData.message);
            location.reload();  //페이지 갱신
        });
    });

    $('#logout_btn').click(function(){
        $.post('logout',{}, function(returnData){
            alert(returnData.message);
            location.reload();  //페이지 갱신
        });
    });


    $('#contact_btn').click(function(){
        const name = $('#name').val();
        const email = $('#email').val();
        const comments = $('#comments').val();
        //alert(name + ' ' +  email + ' ' +  commnets);   
        const sendParam = {name, email, comments};   
        $.post('contact', sendParam, function(returnData){
            alert(returnData.message);
        });
    });

});