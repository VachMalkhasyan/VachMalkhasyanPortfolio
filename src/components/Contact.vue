<template>
  <div class="page-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 py-3 wow fadeInUp">
          <div class="subhead">Contact Me</div>
          <h2 class="title-section">Get In Touch</h2>
          <div class="divider"></div>
          <form action="#">
            <div class="py-2">
              <input type="text" class="form-control" placeholder="Full name" />
            </div>
            <div class="py-2">
              <input type="text" class="form-control" placeholder="Email" />
            </div>
            <div class="py-2">
              <textarea
                rows="6"
                class="form-control"
                placeholder="Enter message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary rounded-pill mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <!-- .container -->
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
  name: "Contact",

  components: {
    Navbar: Navbar,
    Footer: Footer,
  },
};
</script>

<style></style>
