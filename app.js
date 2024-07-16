const buttonToChange = document.querySelector("#start-now");
buttonToChange.style.background = '#2015ff';
buttonToChange.style.borderRadius = '5rem';

const sectionToChange = document.querySelector(".hero--homepage");
sectionToChange.classList.add("new-hero");

const cards = document.querySelectorAll(".card");
cards.forEach(
    value => value.classList.add('new-card')
)

