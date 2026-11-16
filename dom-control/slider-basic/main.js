const  swiper = new Swiper(".mySwiper", {
        autoplay: {
            delay: 4000  
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
      });