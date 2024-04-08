let burgerMenuBtn = document.getElementById('burgerMenuBtn');
let header = document.getElementById('header');
let burgerMenuClose = document.getElementById('burgerMenuClose');

burgerMenuBtn.addEventListener("click", () => {
    header.classList.add('burger-active');
    document.body.style.overflow = 'hidden';
});
burgerMenuClose.addEventListener("click", () => {
    header.classList.remove('burger-active');
    document.body.style.overflow = 'scroll';
});

