const allCoursesContainer = document.querySelector('#individual-nanodegree-programs');

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
    
    // console.log('clik');

    if (btnClassList.contains('button--primary')) {
        e.preventDefault();
        changeText(target);
        const grandParent = target.parentNode.parentNode;
        const starsDiv = grandParent.querySelector('.three-stars');
        starsDiv.classList.toggle('hide-stars');
        //target.parentNode.nextSibling.nextSibling.firstChild.nextSibling.classList.toggle('hide-stars');
        //target.nextSibling.classList.toggle('hide-stars');
        // console.log('button clicked!')
    }
}

allCoursesContainer.addEventListener('click',evt=>listenerContainer(evt))