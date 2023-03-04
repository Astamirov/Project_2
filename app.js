const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const menuServices = document.querySelector('.services__menu')
const servicesBtn = document.querySelector('.vertical-button') 
const services = document.querySelector('.services') 

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//
const servicesMenu = () => {
    menuServices.classList.toggle('services-active');
    services.classList.toggle('services-active');
    servicesBtn.classList.toggle('services-active');
}

servicesBtn.addEventListener('click', servicesMenu);