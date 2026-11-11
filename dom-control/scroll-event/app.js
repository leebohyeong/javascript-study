const wrap = document.querySelector('#wrap');
const fixedTop = document.querySelector('.fixedTop');
const header = document.querySelector('header');
const headerHeight = header.getBoundingClientRect().height;
console.log(headerHeight);

fixedTop.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});

window.addEventListener('scroll', () => {
    const scrolly = window.scrollY;
    console.log(scrolly);

    wrap.classList.toggle('scroll', scrolly > headerHeight);
    header.classList.toggle('active', scrolly > headerHeight);
});