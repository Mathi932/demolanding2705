// Login functionality
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('login-error');

    if (usuario.length !== 8 || !/^\d{8}$/.test(usuario)) {
        errorDiv.textContent = 'El usuario debe tener 8 dígitos';
        errorDiv.style.display = 'block';
        return;
    }

    if (password.length < 4) {
        errorDiv.textContent = 'La contraseña debe tener al menos 4 caracteres';
        errorDiv.style.display = 'block';
        return;
    }

    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-app').style.display = 'block';
});

// Carousel functionality
const carousels = {
    hero: { currentSlide: 0, totalSlides: 3 },
    features: { currentSlide: 0, totalSlides: 4 }
};

function changeSlide(direction, carousel) {
    const slides = document.querySelectorAll(`#${carousel}-slides .slide, #${carousel}-slides .feature-slide`);
    const dots = document.querySelectorAll(`#${carousel}-dots .dot`);
    
    slides[carousels[carousel].currentSlide].classList.remove('active');
    dots[carousels[carousel].currentSlide].classList.remove('active');
    
    carousels[carousel].currentSlide += direction;
    
    if (carousels[carousel].currentSlide < 0) {
        carousels[carousel].currentSlide = carousels[carousel].totalSlides - 1;
    } else if (carousels[carousel].currentSlide >= carousels[carousel].totalSlides) {
        carousels[carousel].currentSlide = 0;
    }
    
    slides[carousels[carousel].currentSlide].classList.add('active');
    dots[carousels[carousel].currentSlide].classList.add('active');
}

function goToSlide(index, carousel) {
    const slides = document.querySelectorAll(`#${carousel}-slides .slide, #${carousel}-slides .feature-slide`);
    const dots = document.querySelectorAll(`#${carousel}-dots .dot`);
    
    slides[carousels[carousel].currentSlide].classList.remove('active');
    dots[carousels[carousel].currentSlide].classList.remove('active');
    
    carousels[carousel].currentSlide = index;
    
    slides[carousels[carousel].currentSlide].classList.add('active');
    dots[carousels[carousel].currentSlide].classList.add('active');
}

function selectTime(button) {
    const parent = button.parentElement;
    const buttons = parent.querySelectorAll('.time-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

// Form submission
document.querySelectorAll('.booking-form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('success-modal').style.display = 'flex';
    });
});

function closeModal() {
    document.getElementById('success-modal').style.display = 'none';
}