$(document).ready(function(){
    $('#hello_div').click(function(){
        let login_form='ID<input id="id"><br>';
        login_form += 'PW<input id="pw" type="password"><br>';
        login_form += '<input id="login_btn" type="button" value="login">';
        $('#login_div').html(login_form);
    });

    $(document).on('click','#login_btn',function(){
        const id=$('#id').val();
        const pw=$('#pw').val();
        const send_param={id,pw};
        
        $.post('login',send_param,function(returnData){
            alert(returnData.message);
            if(returnData.resultCode){
                let logout_form='<div id="logout_btn" class="btn btn-danger" >logout</div>';
                logout_form += '<br><hr>쇼핑하기<br>';                
                logout_form += '<input type="checkbox" name="product" value="apple">사과</input>';
                logout_form += '<input type="checkbox" name="product" value="orange">오렌지</input>';
                logout_form += '<input type="checkbox" name="product" value="banana">바나나</input>';
                logout_form += '<input type="checkbox" name="product" value="rice">쌀</input>';
                logout_form += '<input type="checkbox" name="product" value="kimchi">김치</input>';
                logout_form += '<input type="checkbox" name="product" value="meat">고기</input>';
                logout_form += '<input type="button"  id="basket_btn" value="장바구니 넣기"><br>';
                logout_form += '<hr><input type="button"  id="basket_view_btn" value="장바구니 보기">';
                logout_form += '<br><div id="basket_view_div"></div>';
                $('#login_div').html(logout_form);
            }else{
                $('#id').val("");
                $('#pw').val("");
            }           
        });
    });
    
    $(document).on('click','#basket_btn',function(){
        const checkbox = [];
        $(":input:checkbox[name=product]:checked").each(function(){
            checkbox.push($(this).val());
            
        });
        console.log(checkbox);
        const product = checkbox.join(',');

        const send_param={product};
        
        $.post('basket',send_param,function(returnData){
            alert(returnData.message);
        });
    });
    
    $(document).on('click','#basket_view_btn',function(){      
       
        const send_param={};
        $.post('basket_view',send_param,function(returnData){
           alert(returnData.message);            
        });
    });
    
    $(document).on('click','#logout_btn',function(){     
        const send_param={};
        $.post('logout',send_param,function(returnData){
           alert(returnData.message);     
           location.reload();
        });
    });
});
    
    
    
    
    
    