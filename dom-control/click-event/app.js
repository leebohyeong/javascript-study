const wrap = document.querySelector('#wrap');
const content = document.querySelector('.content');
const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');
const btns = document.querySelectorAll('.btn');
console.log(btns);

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.classList.contains('openBtn')) {
            wrap.classList.remove('close-modal');
        } else if(btn.classList.contains('closeBtn')) {
            wrap.classList.add('close-modal');
        }
    });
})

// closeBtn.addEventListener('click', () => {
//     // content.style.display = "none";
//     wrap.classList.add('close-modal');
// });

// openBtn.addEventListener('click', () => {
//     // content.style.display = 'block';
//     wrap.classList.remove('close-modal');
// });


