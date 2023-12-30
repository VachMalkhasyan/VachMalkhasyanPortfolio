
<template>
  
    <Navbar />
    <Footer />
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  name: "ProjectPage",
  props: {
    blog: Array,
  },

  components: { Navbar, Footer },
};
</script>

