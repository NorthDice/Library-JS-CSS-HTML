fetch('../header/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '../header/header.css'; 
        document.head.appendChild(link); 

        const links = document.querySelectorAll('.nav-list a');
        const basePath = window.location.origin + window.location.pathname.split('/').slice(0, -1).join('/');

        links.forEach(link => {
            const originalHref = link.getAttribute('href');            
            
            link.href = new URL(originalHref, basePath).href;

            if (link.href === window.location.href) {
                link.classList.add('active');
            }
        });
    });
