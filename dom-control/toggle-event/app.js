const toggleBtn = document.querySelector('.toggleBtn');
const wrap = document.querySelector('#wrap');


toggleBtn.addEventListener('click', (event) => {
    event.preventDefault();
    wrap.classList.toggle('open-modal')
})
