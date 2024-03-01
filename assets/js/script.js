// Start Search Bar
let searchbtn = document.getElementById('search-btn');
let $main = document.querySelector('.main-2');
let $search = document.querySelector('.search');
let $closesearch = document.querySelector('.close-main');

searchbtn.addEventListener('click', () => {
    $main.classList.remove('d-none');
    $main.classList.add('main');

    $search.classList.remove('d-none');
});

$closesearch.addEventListener('click', () => {
    $main.classList.add('d-none');
    $main.classList.remove('main');

    $search.classList.add('d-none');
});

// End Search Bar

// Start Menu
let $menubtn = document.querySelector('.menu-btn');
let $menu = document.querySelector('.menu');

$menubtn.addEventListener('click', () => {
    $menu.classList.toggle('d-none');
});
// End Menu

// Start Header
// let $header = document.querySelector('.header');
// let $scroll = window.scrollY;

// if ($scroll > 60) {
//     $header.classList.add('position-fixed');
// }

// else {
//     $header.classList.remove("position-fixed");
// }

// window.onscroll = function () {
//     $scroll = window.scrollY;

//     if ($scroll > 60) {
//         $header.classList.add("position-fixed");
//     } else {
//         $header.classList.remove("position-fixed");
//     }
// };
// End Header 