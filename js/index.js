
const btn=document.querySelector('#hambtn');
const navs=document.querySelector('.navbar');

btn.addEventListener("click",()=>{
    navs.classList.toggle('slide');
    btn.classList.toggle('slide');
    
});


var typed = new Typed(".typing", {
    strings: [" Grow", " Learn", " Build"],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true
});


