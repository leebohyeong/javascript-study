const bg = document.querySelectorAll('.bg-wrap li');



const swiper = new Swiper('.gallery', {
    slidesPerView: 1,
    // centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    on: {
        activeIndexChange: function() {
            const idx = this.realIndex;

            bg.forEach((item) => item.classList.remove('active'))
            bg[idx].classList.add('active');
            
        }
    }
});


