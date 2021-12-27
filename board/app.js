const board = document.querySelector('#board');
const SQUARES_NUMBER = 700;
// const colors = ['#23432']


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('squere');

    square.addEventListener('mouseover',  setColor)

    square.addEventListener('mouseleave',  removeColor) 
    
     board.append(square)
    
}

function setColor(event) {
  const elem = event.target;
    const color = getRandomColor();

    elem.style.backgroundColor = color;
     elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

}

function removeColor(event) {
    const elem = event.target;
    elem.style.backgroundColor = '#1d1d1d';
      elem.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}