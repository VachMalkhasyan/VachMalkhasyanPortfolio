<template>
    <swiper
      :spaceBetween="50"
      :slides-per-view="10"
      :centeredSlides="true"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="bg-green"
    >
      <swiper-slide >
        <div class="border-double border-4 border-green-50 bg-white">
          <img  height="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="border-double border-4 border-green-50">

        <img  height="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" /> 
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="border-double border-4 border-green-50">

        <img  height="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" />
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="border-double border-4 border-green-50">

        <img  height="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="border-double border-4 border-green-50">

        <img  height="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="border-double border-4 border-green-50">

        <img height="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="border-double border-4 border-green-50">

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="border-double border-4 border-green-50">

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="border-double border-4 border-green-50">

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="border-double border-4 border-green-50">

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />  
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="border-double border-4 border-green-50">

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />  
      </div>        
      </swiper-slide>
      <swiper-slide>
        <div class="border-double border-4 border-green-50">

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="border-double border-4 border-green-50">

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" /> 
      </div>       
      </swiper-slide>
      <swiper-slide>
        <div class="border-double border-4 border-green-50">

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
      </div>       
      </swiper-slide>
      <swiper-slide>
        <div class="border-double border-4 border-green-50">

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />   
      </div>     
      </swiper-slide>
      <swiper-slide>
        <div class="border-double border-4 border-green-50">

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /> 
        </div>
      </swiper-slide>
  </swiper>
  
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    
    // import required modules
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Autoplay, Pagination, Navigation],
        };
      },
    };
  </script>
  <style scoped>
    .swiper-slide {
    height: 100px !important;
}
  .swiper-slide .img {
    padding: 5px;
    height: 90px !important;
}
  .swiper-wriper{
    background-color: rgb(162, 245, 162);
  }
  </style>
  