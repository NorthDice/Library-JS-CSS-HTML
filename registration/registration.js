document.getElementById('registerButton').addEventListener('click', function() {
    this.style.backgroundColor = '#218838'; 
});

document.getElementById('clearButton').addEventListener('click', function() {
    this.style.backgroundColor = '#c82333'; 
});

document.getElementById('email').addEventListener('focus', function() {
    this.style.backgroundColor = '#e9f5ff'; 
    this.style.color = '#333'; 
});

document.getElementById('email').addEventListener('blur', function() {
    this.style.backgroundColor = ''; 
    this.style.color = ''; 
});
