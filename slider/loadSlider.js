function loadCSS() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../slider/slider.css'; // Path to your CSS file
    document.head.appendChild(link);
}

// Function to load the slider HTML and initialize the slider
function loadSlider() {
    fetch('../slider/slider.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('slider').innerHTML = data;
            
            // Load the CSS for the slider
            loadCSS();
            
            // Initialize the slider after it's loaded
            initializeSlider();
        })
        .catch(error => console.error('Error loading the slider:', error));
}

// Function to initialize the slider (same as before)
function initializeSlider() {
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const prevArrow = document.querySelector('.arrow.prev');
    const nextArrow = document.querySelector('.arrow.next');
    const navButtons = document.querySelectorAll('.nav-btn');
    let currentSlideIndex = 0;

    // Function to go to a specific slide
    function goToSlide(index) {
        if (index < 0) {
            currentSlideIndex = slides.length - 1; // Loop back to last slide
        } else if (index >= slides.length) {
            currentSlideIndex = 0; // Loop back to first slide
        } else {
            currentSlideIndex = index;
        }

        // Move the slides container to the correct position
        slidesContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

        // Update the active state of navigation buttons
        updateNavButtons();
    }

    // Function to update the active state of navigation buttons
    function updateNavButtons() {
        navButtons.forEach((btn, index) => {
            btn.classList.toggle('active', index === currentSlideIndex);
        });
    }

    // Event listeners for arrows
    prevArrow.addEventListener('click', () => {
        goToSlide(currentSlideIndex - 1);
        navigateToSlide(currentSlideIndex - 1); // Navigate to the next page
    });

    nextArrow.addEventListener('click', () => {
        goToSlide(currentSlideIndex + 1);
        navigateToSlide(currentSlideIndex + 1); // Navigate to the next page
    });

    // Event listeners for navigation buttons
    navButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            goToSlide(index);
            navigateToSlide(index); // Navigate to the next page
        });
    });

    // Function to handle click on slide to navigate to the link
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            const link = slide.querySelector('a');
            if (link) {
                window.location.href = link.href; // Redirect to the target page
            }
        });
    });

    // Function to navigate to the page of the current slide
    function navigateToSlide(index) {
        const link = slides[index].querySelector('a');
        if (link) {
            const originalHref = link.getAttribute('href');
            const basePath = window.location.origin + window.location.pathname.split('/').slice(0, -1).join('/');
            const absoluteUrl = new URL(originalHref, basePath).href; // Generate the absolute URL
            window.location.href = absoluteUrl; // Navigate to the absolute URL
        }
    }

    // Initialize the slider by going to the first slide
    goToSlide(currentSlideIndex);
}


loadSlider();

