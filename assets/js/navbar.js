const open = document.getElementById('open');
const close = document.getElementById('close');
const main = document.querySelector('main');
const nav = document.querySelector('nav ul');
open.addEventListener('click', function () {
    nav.style.top = '0';
})
close.addEventListener('click', function () {
    nav.style.top = '-380px';
})
main.addEventListener('click', function () {
    nav.style.top = '-380px';
})


const navItems = document.querySelectorAll('header nav ul li');
const about = document.getElementById('hero');
const project = document.getElementById('projects');
const provide = document.getElementById('provides');
const testimoni = document.getElementById('testimonials');
const contact = document.getElementById('contact');
navItems.forEach(element => {
    element.addEventListener('click', function () {
        if (this.innerHTML == 'Tentang') {
            scrollTo(0, about.offsetTop);
        } else if (this.innerHTML == 'Proyek') {
            scrollTo(0, project.offsetTop);
        } else if (this.innerHTML == 'Layanan') {
            scrollTo(0, provide.offsetTop);
        } else if (this.innerHTML == 'Testimoni') {
            scrollTo(0, testimoni.offsetTop);
        } else {
            scrollTo(0, contact.offsetTop);
        }
    })
});

// scroll to top
const btnResetScroll = document.querySelector('footer button');
btnResetScroll.addEventListener('click', function () {
    scrollTo(0, 0);
})

const html = document.querySelector('html');
window.addEventListener('scroll', function () {
    if (html.scrollTop == 0) {
        btnResetScroll.style.opacity = '0';
    } else {
        btnResetScroll.style.opacity = '1';
    }
})