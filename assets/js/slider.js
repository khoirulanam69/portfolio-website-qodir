const slides = document.querySelectorAll('.slide');
const btnCircle = document.querySelectorAll('.circle');
let counter = 0;

setInterval(function () {
    slides.forEach(slide => {
        slide.classList.remove('active');
        btnCircle.forEach(btn => {
            btn.classList.remove('active');
        });
    });

    if (counter > 1) {
        counter = 0;
    }

    slides[counter].classList.add('active');
    btnCircle[counter].classList.add('active');

    counter++;
}, 7000)