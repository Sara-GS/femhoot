const spanName = document.getElementById('user-div');

function getName(){
    let userName = document.getElementById('inputName').value;
    localStorage.setItem('user', userName);
}

function putUser() {
    let userText = document.createElement('h2');
    userText.className = 'user-welcome';
    userText.innerHTML = 'Hola ' + localStorage.getItem('user') + ' !';
    
    spanName.appendChild(userText);
}