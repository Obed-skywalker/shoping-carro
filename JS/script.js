let swiperProjects = new Swiper(".swiper", {
    loop:true,
    spaceBetween:40,
   
    autoplay: {                         //autoplay
     delay: 4000,  
   },   
     navigation: {
       nextEl: ".swiper-btn-next",
       prevEl: ".swiper-btn-prev",
     },
     pagination: {
       el: ".swiper-pagination",
   
     },
     mousewheel: true,
     keyboard: true,
   });  