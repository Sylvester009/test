const nav = document.querySelector('#navbar-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) nav.style.background = 'black';
    else nav.style.background ='rgba(189,81,189,0.3)';
});