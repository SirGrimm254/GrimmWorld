window.onload = function(){
    const username = localStorage.getItem('username');
    const usernameDisplay = document.getElementById('usernameDisplay');
    if (username){
        usernameDisplay.textContent = username;
    }
    else{
        usernameDisplay.textContent = '';
    }
};
