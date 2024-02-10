const navbar= document.querySelector('.navbar');
const hamburger= document.querySelector('.hamburger');
const navLinks= document.querySelector('.nav-links');
const navLinksLi= document.querySelectorAll('.nav-links li');

window.addEventListener('scroll', () => {
    if(this.scrollY >= 100)
    {
        navbar.classList.add('scrolled');
    }
    else{
        navbar.classList.remove('scrolled');
    }
})

hamburger.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
})

navLinksLi.forEach(li => li.addEventListener('click', ()=>{
    navLinksLi.forEach(li => li.classList.remove('active'));
    li.classList.add('active');

    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
}))

//Typed js
document.addEventListener("DOMContentLoaded", function() {
let options = {
    strings: [
        'Our Creative Program', 
        'With Professional Software Expert'
    ],
    typeSpeed: 40, // Adjust the typing speed
    // Add any other configuration options here
    loop: true,
    loopCount: Infinity,
    typeSpeed: 10,
    backDelay: 2000,
};

let typed = new Typed('#hero-titles', options);
});

// Initialize AOS when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
  });