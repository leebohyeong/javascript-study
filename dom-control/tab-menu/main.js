const tabs = document.querySelectorAll('.tabs li');
const contents = document.querySelectorAll('.content');

function init(num) {
    tabs[num].classList.add('active');
    contents[num].classList.add('on');
}

function reset() {
    for(let i=0; i<tabs.length; i++) {
        tabs[i].classList.remove('active');
        contents[i].classList.remove('on');
    }
}

tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
        console.log(tab, idx);
        reset()
        init(idx);
    });
})


init(0);