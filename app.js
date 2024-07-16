const myH6 = document.querySelector('.testimonials h6.text-center');
myH6.addEventListener('click',()=>alert('h6 clicked!'));

const myH1 = document.querySelector('h1');

myH1.addEventListener('mouseover',
    (event)=> event.target.innerHTML = "<em>Build an AR App</em>"
)

myH1.addEventListener('mouseleave',
    (event)=> event.target.innerHTML = "Learn ARKit"
)

// document.addEventListener('keypress',event => {
//     console.log('remove a child');
//     document.querySelector('#contain-all').firstElementChild.remove();
// })

//Only one time event

const elementHero = document.querySelector('.hero__module');

function onceListener(e) {
    console.log('removing last child of the container of class: hero__module');
    elementHero.lastElementChild.remove();
    document.removeEventListener('keypress', onceListener);
}
document.addEventListener('keypress', onceListener)
