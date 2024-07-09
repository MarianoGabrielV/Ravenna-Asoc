
/* Recarga img de inicio */
document.getElementById('inicio-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = window.location.href.split('#')[0] + '#inicio';
    window.location.reload();
});


document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('.lazy-image');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    lazyImages.forEach(image => {
        observer.observe(image);
    });
});


$(document).ready(function() {
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});






