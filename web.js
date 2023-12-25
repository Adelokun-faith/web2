let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active')
    cart.classList.remove('active')
    user.classList.remove('active')
    navbar.classList.remove('active')
}

let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () =>{
    cart.classList.toggle('active')
    search.classList.remove('active')
    user.classList.remove('active')
    navbar.classList.remove('active');
}

let user = document.querySelector('.user');

document.querySelector('#user-icon').onclick = () =>{
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active'); 
}


window.onscroll = () => {
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active'); 
    navbar.classList.remove('active');
}



// Navbar Scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Swiper
var swiper = new Swiper(".new-arrival", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerViews: 0,
        },
        568: {
            slidesPerViews: 2,
        },
        768: {
            slidesPerViews: 2,
        },
        1020: {
            slidesPerViews: 3,
        },
    },
  });

// let menu = document.querySelector('#menu-icon')
// let navbar = document.querySelector('.navbar')

// menu.onclick = () => {
// menu.classList.toggle('bx-x');
// navbar.classList.toggle('active');
// }

// window.onscroll = () => {
// menu.classList.remove('bx-x');
// navbar.classList.remove('active');
// }