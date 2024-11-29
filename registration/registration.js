
document.getElementById('registerButton').addEventListener('click', function () {
    this.style.backgroundColor = '#218838';
});


document.getElementById('clearButton').addEventListener('click', function () {
    this.style.backgroundColor = '#c82333';
});


document.getElementById('email').addEventListener('focus', function () {
    this.style.backgroundColor = '#e9f5ff';
    this.style.color = '#333';
});


document.getElementById('email').addEventListener('blur', function () {
    this.style.backgroundColor = '';
    this.style.color = '';
});


document.getElementById('registrationForm').addEventListener('submit', function (event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|ukr\.net)$/;
    if (!emailRegex.test(email)) {
        alert('Будь ласка, введіть правильну адресу електронної пошти: @gmail.com або @ukr.net');
        event.preventDefault(); 
        return;
    }

  
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; 
    if (!passwordRegex.test(password)) {
        alert('Пароль повинен містити тільки латинські букви, цифри та бути довжиною мінімум 6 символів');
        event.preventDefault(); 
        return;
    }
});
