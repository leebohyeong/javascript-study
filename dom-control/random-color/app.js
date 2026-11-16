const bg = document.querySelector('#wrap');
const title = bg.querySelector('h1');
const playBtn = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');
const btnWrap = document.querySelector('.btn-wrap');

function getRandomColor() {
    const hex =  '#' +  Math.random().toString(16).slice(2, 8).padEnd(6, '0');
    console.log(hex);

    return hex;
}

function bgChange() {
    const randomColor = getRandomColor();

    bg.style.backgroundColor = randomColor;
    title.innerHTML = randomColor.toUpperCase()
}


bgChange();
let play;

playBtn.addEventListener('click', () => {
    if(!play) {
        play = setInterval(bgChange, 1000);
    }
    
})

stopBtn.addEventListener('click', () => {
    clearInterval(play);    
    play = '';
})



