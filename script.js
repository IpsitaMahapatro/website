let menu= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar')

menu.onclick=() =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
const sr= ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});
sr.reveal('.logo',{delay:100, origin:'left'});
sr.reveal('.navbar',{delay:200, origin:'top'});
sr.reveal('.menu-btn',{delay:420, origin:'right'});

sr.reveal('.HOME-text span',{delay:600, origin:'top'});
sr.reveal('.HOME-text h1',{delay:680, origin:'left'});
sr.reveal('.HOME-text p',{delay:750, origin:'right'});
sr.reveal('.main-btn',{delay:860, origin:'left'}); 
sr.reveal('.HOME-img',{delay:700, origin:'right'});

