window.onscroll = function () {
  myFunction();
};
const navbar = document.querySelector('.navbar');
const navbarBrand = document.querySelector('.navbar-brand');

function myFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add('bg-light');
    navbarBrand.classList.add('color-brand');
  } else {
    navbar.classList.remove('bg-light');
    navbarBrand.classList.remove('color-brand');
  }
}
