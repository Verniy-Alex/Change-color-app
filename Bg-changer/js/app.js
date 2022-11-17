const btn = document.getElementById('btn');
const colors = ['red', 'blue', 'grey', 'yellow', 'pink', 'green', 'lightblue', 'gold']
const body = document.querySelector('body')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    let hexColor = colors[getRandomColor()]
    body.style.backgroundColor = hexColor;
    color.innerHTML = hexColor;
})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}