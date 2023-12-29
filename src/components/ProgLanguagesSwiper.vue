<template>
    <swiper
      :spaceBetween="30"
      :slides-per-view="3"
      :centeredSlides="true"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :modules="modules"
    >
      <swiper-slide class="h-10"><img src="../assets/1611079.png"></swiper-slide>
      <swiper-slide class="h-10"><img src="../assets/1611079.png"></swiper-slide>
      <swiper-slide class="h-10"><img src="../assets/1611079.png"></swiper-slide>
      <swiper-slide class="h-10"><img src="../assets/1611079.png"></swiper-slide>
      <swiper-slide class="h-10"><img src="../assets/1611079.png"></swiper-slide>
      <swiper-slide class="h-10"><img src="../assets/1611079.png"></swiper-slide>
      <swiper-slide class="h-10"><img src="../assets/logo.png"></swiper-slide>
      <swiper-slide class="h-10"><img src="../assets/1611079.png"></swiper-slide>
      <swiper-slide class="h-10"><img src="../assets/1611079.png"></swiper-slide>
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
  