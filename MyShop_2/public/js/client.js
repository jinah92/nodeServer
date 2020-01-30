$(document).ready(function(){
    $('#board_write_btn').click(function(){
        const board_title = $('#board_title').val();
        const board_content = $('#board_content').val();
        const sendParam = {board_title, board_content};
    
        $.post('/board/write', sendParam, function(returnData){
            alert(returnData.message);
        });
    });

    $('#board_read_text').click(function(){
        window.open("/board/read_form", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=1000,height=700");       
    });

    $('#board_write_text').click(function(){
        window.open("/board/write_form", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=1000,height=700");       
    });

    $('#basket_btn').click(function(){
        const quantity = $('#quantity').val();
        const product = $('#product').val();
        const sendParam = {product, quantity};
        //alert(quantity + " : " + product);

        $.post('/basket', sendParam, function(returnData){
            alert(returnData.message);
        });
    });

    $('#login_btn').click(function(){   
        const email = $('#login_email').val();
        const sendParam = {email};
        $.post('/login', sendParam, function(returnData){
            alert(returnData.message);
            location.reload();  //페이지 갱신
        });
    });

    $('#logout_btn').click(function(){
        $.post('/logout',{}, function(returnData){
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
        $.post('/contact', sendParam, function(returnData){
            alert(returnData.message);
        });
    });
});