const card = document.querySelector('.card');
const container = document.querySelector('.container');
// items
const title = document.querySelector('.title');
const logo = document.querySelector('.logo img');
const more = document.querySelector('.more button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
//moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY) /25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//animate in
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
// popout
    title.style.transform = "translateZ(150px)";
    logo.style.transform = "translateZ(170px)";
    description.style.transform = "translateZ(140px)";
    sizes.style.transform = "translateZ(130px)";
    more.style.transform = "translateZ(120px)";
})




//animate out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotate(0deg)`;
// popback
title.style.transform = "translateZ(0px)";
logo.style.transform = "translateZ(0px)";
description.style.transform = "translateZ(0px)";
sizes.style.transform = "translateZ(0px)";
more.style.transform = "translateZ(0px)";
})