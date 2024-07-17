const allCoursesContainer = document.querySelector('#individual-nanodegree-programs');

function listenerContainer(e) {
    const target = e.target;
    const classList = target.classList;
    
    console.log('clik');

    if (classList.contains('button--primary')) {
        e.preventDefault();
        console.log('button clicked!')
    }
}

allCoursesContainer.addEventListener('click',evt=>listenerContainer(evt))