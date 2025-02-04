fetch('./header/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './header/header.css';
        document.head.appendChild(link);

        const links = document.querySelectorAll('.nav-list a');
        links.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add('active');
            }
        });
    })
    .catch(error => console.error('Ошибка при загрузке хедера:', error));

fetch('./footer/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './footer/footer.css';
        document.head.appendChild(link);
    })
    .catch(error => console.error('Ошибка при загрузке футера:', error));

function loadCSS() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './slider/slider.css';
    document.head.appendChild(link);
}

function loadSlider() {
    fetch('./slider/slider.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('slider').innerHTML = data;
            loadCSS();
            const script = document.createElement('script');
            script.src = './slider/slider.js';
            script.onload = () => console.log('Slider initialized');
            document.body.appendChild(script);
        })
        .catch(error => console.error('Error loading the slider:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    loadSlider();
});
