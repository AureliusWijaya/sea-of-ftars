//toggle class active
const navbarNAV = document.querySelector('.navbar-nav');
const heroSection = document.querySelector('.hero');
const ctaElement = document.querySelector('.cta');

// ketike menu di klik
document.querySelector('#hamburger-menu').onclick= ()=>{
    navbarNAV.classList.toggle('active');
    heroSection.classList.toggle('hide-text');
    ctaElement.classList.toggle('hide-text');
};

// klik mana saja untuk close menu
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNAV.contains(e.target)){
        navbarNAV.classList.remove('active');
        heroSection.classList.remove('hide-text');
        ctaElement.classList.remove('hide-text');
    }
});
