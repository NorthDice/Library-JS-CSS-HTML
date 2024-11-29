// Получаем элементы слайдера
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.arrow.prev');
const nextButton = document.querySelector('.arrow.next');
const navButtons = document.querySelectorAll('.nav-btn');

let currentSlide = 0;

// Функция для обновления текущего слайда
function updateSlide(index) {
    // Убедимся, что индекс находится в пределах массива
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    // Скрываем все слайды и их контент
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.display = 'none'; // Скрыть слайд
    });

    // Удаляем активный класс у всех кнопок навигации
    navButtons.forEach(btn => btn.classList.remove('active'));

    // Отображаем текущий слайд
    slides[index].classList.add('active');
    slides[index].style.display = 'block'; // Показать текущий слайд

    // Активируем соответствующую кнопку навигации
    navButtons[index].classList.add('active');
}

// Переход к следующему слайду
function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Увеличиваем индекс
    updateSlide(currentSlide);
}

// Переход к предыдущему слайду
function showPrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Уменьшаем индекс
    updateSlide(currentSlide);
}

// Обработчик кликов на стрелки
nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

// Обработчики кликов на кнопки навигации
navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentSlide = index; // Устанавливаем индекс на выбранный
        updateSlide(currentSlide);
    });
});

// Инициализация: показываем первый слайд
updateSlide(currentSlide);
