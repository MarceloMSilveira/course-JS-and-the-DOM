const allCoursesContainer = document.querySelector('#individual-nanodegree-programs');

function createCardWithButton() {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card--nanodegree__favorites';

    const button = document.createElement('button');
    button.className = 'button--primary';
    button.textContent = 'Add to favorites';

    cardDiv.appendChild(button);

    return cardDiv;
}

function createCardWithStars() {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card--nanodegree__3stars';

    const starsDiv = document.createElement('div');
    starsDiv.className = 'three-stars  hide-stars';
    starsDiv.textContent = '🌟 🌟 🌟';

    cardDiv.appendChild(starsDiv);

    return cardDiv;
}

//const document.body.appendChild(cardElement);

const cardContainers = allCoursesContainer.querySelectorAll('.card__container');
//console.log(cardContainers[1].querySelector('.card--nanodegree__title')); 

cardContainers.forEach(function(value) {
    const cardTitle = value.querySelector('.card--nanodegree__title');
    const cardFavoriteBtn = createCardWithButton();
    cardTitle.insertAdjacentElement('afterend',cardFavoriteBtn);
    const cardWithStars = createCardWithStars();
    cardFavoriteBtn.insertAdjacentElement('afterend',cardWithStars);
})

function changeText(btn) {
    const btnText = btn.textContent;
    if(btnText==='Add to favorites'){
        btn.textContent='Remove from favorites'
    } else {
        btn.textContent='Add to favorites'
    }
}

function listenerContainer(e) {
    const target = e.target;
    const btnClassList = target.classList;

    if (btnClassList.contains('button--primary')) {
        e.preventDefault();
        changeText(target);
        const grandParent = target.parentNode.parentNode;
        const starsDiv = grandParent.querySelector('.three-stars');
        starsDiv.classList.toggle('hide-stars');
    }
}

allCoursesContainer.addEventListener('click',evt=>listenerContainer(evt))