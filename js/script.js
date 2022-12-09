const left = document.querySelector('.split.left');
const right = document.querySelector('.split.right');
const container = document.querySelector('.container');
const openRight = document.querySelector('#openright');
const openLeft = document.querySelector('#openleft');

left.addEventListener("mouseenter", () => {
    container.classList.add('hover-left')
})

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left')
})

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right')
})

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right')
})

openRight.addEventListener('click', () => {
    container.classList.toggle('open-full-right')
})

openLeft.addEventListener('click', () => {
    container.classList.toggle('open-full-left')
})
