/*
 *
 * login-register modal
 * Autor: Creative Tim
 * Web-autor: creative.tim
 * Web script: http://creative-tim.com
 * 
 */
var path;
function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Register with');
    }); 
    $('.error').removeClass('alert alert-danger').html('');
       
}
function showLoginForm(){
    path=window.location.href
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');    
        });
        
        $('.modal-title').html('Login with');
    });       
     $('.error').removeClass('alert alert-danger').html('');

}

function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}
function openRegisterModal(){
    showRegisterForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}

function loginAjax(event){
     if( event.key == "Enter" || event.button == 0 ){
        var check = false;
        var user=document.getElementById('em').value;
        var pass=document.getElementById('pass').value;
        for(var i=0;i<data_users.length;i++){
                if(user== data_users[i].username && pass == data_users[i].password){
                    localStorage.id_user_login=i;
                    check = true;
                    break;
                }
        }
        if(check){
           back();
        }
        else{
            shakeModal();
        }
        localStorage.check_login = check;

     }
   
};




function shakeModal(){
    $('#loginModal .modal-dialog').addClass('shake');
             $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
             $('input[type="password"]').val('');
             setTimeout( function(){ 
                $('#loginModal .modal-dialog').removeClass('shake'); 
    }, 1000 ); 
}
function shakeModals(){
    $('#loginModal .modal-dialog').addClass('shake');
    $('.error').addClass('alert alert-danger').html("Password not equal Password Confim");
    $('input[type="password"]').val('');
    setTimeout( function(){
        $('#loginModal .modal-dialog').removeClass('shake');
    }, 1000 );
}
function empty(){
    $('#loginModal .modal-dialog').addClass('shake');
    $('.error').addClass('alert alert-danger').html("Must not be empty");
    $('input[type="password"]').val('');
    setTimeout( function(){
        $('#loginModal .modal-dialog').removeClass('shake');
    }, 1000 );
}
function back() {
    location.reload();
}
   