document.getElementById('registerForm').onsubmit = function(event){
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword= document.getElementById('confirm').value;
    
    if(!username || !email || !password || !confirmPassword){
        alert("Please fill in all fields.");
        return;
    } 
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(!emailPattern.test(email)){
            alert("Please enter a valid email address.");
            return;
        }
    if(password !== confirmPassword){
        alert("Password do not match");
        return;
    }
    
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    
    alert("Registration was successful");
    
    window.location.href = 'login.html';
};

