<template>
  <Navbar  /> 
  <Header id="headerId" />
  <Services id="serviceId" />
  <About id="aboutId" />
  <!-- <Services id="" /> -->

  <!-- <ProgLanguagesSwiper /> -->
  <Contact id="contactId"></Contact>
  <!-- <SoftSkils id="softSkilsId"/> -->
  <Footer />
</template>

<script>
import Navbar from "./Navbar.vue";
import Header from "./Header.vue";
import Services from "./Services.vue";
import About from "./About.vue";
//import SoftSkils from "./SoftSkils.vue";
import Footer from "./Footer.vue";
import Contact from "./Contact.vue";
//import ProgLanguagesSwiper from './ProgLanguagesSwiper.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data() {
    return {};
  },

  props: {
    blog: Array,
  },

  components: {
    Navbar,
    Header,
    Services,
    About,
    //SoftSkils,
    Footer,
    //ProgLanguagesSwiper,
    Contact,
  },
};
</script>

<style></style>
