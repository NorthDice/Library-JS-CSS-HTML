fetch('../footer/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '../footer/footer.css'; 
        document.head.appendChild(link);
    })
    .catch(error => console.error('Ошибка при загрузке футера:', error));
