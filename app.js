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
    const classList = target.classList;
    
    // console.log('clik');

    if (classList.contains('button--primary')) {
        e.preventDefault();
        changeText(target)
        // console.log('button clicked!')
    }
}

allCoursesContainer.addEventListener('click',evt=>listenerContainer(evt))