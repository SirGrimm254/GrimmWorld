document.getElementById('loginForm').onsubmit = function(event){
    event.preventDefault();
    
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    
    const registeredUsername = localStorage.getItem('username');
    const registeredPassword = localStorage.getItem('password');
    
    if(enteredUsername === registeredUsername && enteredPassword === registeredPassword){
        alert("Login successfull");
        window.location.href = 'index2.html';
    }
    else{
        alert("Incorrect username or password. Please try again!");
    }
};
