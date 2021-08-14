document.getElementById('submit-btn').addEventListener('click', function(){
    const userEmailFeild = document.getElementById('user-email');
    const userEmail = userEmailFeild.value;

    const userPasswordFeild = document.getElementById('user-password');
    const userPassword = userPasswordFeild.value;

    if(userEmail == 'sontan@baap.com' && userPassword == '123456'){
        window.location.href ='banking.html';
    }else{
        alert('please enter valied info');
    }
    
});