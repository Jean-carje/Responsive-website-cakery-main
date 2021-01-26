// SHOW MENU 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    // Validate variables
    if(toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('nav-toggle', 'nav-menu-id');


// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav-link");

function linkAction(){
    const navMenu = document.getElementById("nav-menu-id");
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => {n.addEventListener('click', linkAction)});


// SCROLL 
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);


// CHANGE BACKGROUND HEADER
function scrollHeader() {
    const nav = document.getElementById('header');
    
    if (this.scrollY >= 200) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);


// SHOW SCROLL-TOP 
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');

    if (this.scrollY >= 560) {
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollTop);

// SCROLL ANIMATION 
const scrollAnimation = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

scrollAnimation.reveal(`.home-data, .home-img,
.about-data, .about-img, .services-data, .menu-content,
.app-data, .app-img, .contact-data, .contact-button,
.footer-content`, {
    interval: 200
});


// DARK/LIGHT 
const themeButton = document.getElementById('theme');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// Previusly selected theme
const selectedTheme = localStorage.getItem('selected-theme');
const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark': 'light';
const selectedIcon = localStorage.getItem('selected-icon');
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)? 'bx-moon': 'bx-sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate/ Desactivate
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})