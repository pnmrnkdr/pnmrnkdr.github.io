const menuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav ul');

if (menuBtn) {
    menuBtn.addEventListener('click', function() {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '70px';
            navMenu.style.left = '0';
            navMenu.style.right = '0';
            navMenu.style.backgroundColor = '#1a1a1a';
            navMenu.style.padding = '20px';
            navMenu.style.textAlign = 'center';
            navMenu.style.gap = '15px';
        }
    });
}

// Слайдер отзывов
let currentReview = 0;
const reviews = document.querySelectorAll('.review');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showReview(index) {
    reviews.forEach(r => r.classList.remove('active'));
    if (index < 0) index = reviews.length - 1;
    if (index >= reviews.length) index = 0;
    reviews[index].classList.add('active');
    currentReview = index;
}

if (prevBtn && nextBtn && reviews.length > 0) {
    prevBtn.addEventListener('click', function() {
        showReview(currentReview - 1);
    });
    
    nextBtn.addEventListener('click', function() {
        showReview(currentReview + 1);
    });
}

// Автоматическое переключение слайдов каждые 5 секунд
setInterval(function() {
    if (reviews.length > 0) {
        showReview(currentReview + 1);
    }
}, 5000);

// Плавная прокрутка к якорям
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        // Закрываем меню после клика на мобилке
        if (navMenu && window.innerWidth <= 768) {
            navMenu.style.display = 'none';
        }
    });
});



