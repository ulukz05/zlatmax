const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
    
    
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    });


    var swiper = new Swiper(".mn", {
      slidesPerView: 4,
        breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        720: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1000: {
          slidesPerView: 4,
          speechSynthesis: 30
        },
       },
      spaceBetween: 30,
      freeMode: true,
      centeredSlides: false,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    });

  var swiper = new Swiper(".wr", {
    slidesPerView: 1,
      breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 30
       },
      920: {
        slidesPerView: 3,
        spaceBetween: 30
       },
     },
    spaceBetween: 30,
    freeMode: true,
    centeredSlides: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
  });

    let hamburger = document.querySelector('.hamburger');
    let navCollapse = document.querySelector('.navbar');
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle('is-active');
      navCollapse.classList.toggle('is-active');
    })