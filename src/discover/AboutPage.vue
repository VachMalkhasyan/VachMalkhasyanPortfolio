<template>
  <Navbar />
  <About />
  <Footer :blog="blog" />
</template>

<script>
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default {
  name: "AboutPage",
  data() {
    return {};
  },

  props: {
    blog: Array,
  },

  components: {
    Navbar,
    About,
    Services,
    Footer,
  },
};
</script>

<style></style>
