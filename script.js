const show = document.querySelector(".nav-switch");
const nav = document.querySelector('.nav');

show.addEventListener('click', hide);


function hide() {
    nav.classList.toggle('disable');
}