const myH6 = document.querySelector('.testimonials h6.text-center');
myH6.addEventListener('click',()=>alert('h6 clicked!'));

const myH1 = document.querySelector('h1');

myH1.addEventListener('mouseover',
    (event)=> event.target.innerHTML = "<em>Build an AR App</em>"
)

myH1.addEventListener('mouseleave',
    (event)=> event.target.innerHTML = "Learn ARKit"
)

document.addEventListener('keypress',event => {
    console.log('remove a child');
    document.querySelector('#contain-all').firstElementChild.remove();
})