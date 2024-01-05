<template>
  <header>
    <div class="page-banner home-banner">
      <div class="container h-100">
        <div class="row align-items-center h-100">
          
          <div class="col-lg-6 py-3 wow fadeInUp">
            <p
              class="text-green-600 hover:text-green-500 text-2xl lg:text-4xl font-medium lg:font-semibold mb-5 lg:leading-normal leading-snug">
             {{ $t("header.title")  }}
              <br />
              {{ $t("header.title1")  }}
            </p>
            <p
              class="hidden lg:block text-2xl mb-5">
              {{ $t("header.subtitle")  }}
            </p>

            <a
              href="https://www.linkedin.com/in/vachik-malxasyan-01aa28218"
              target="_blank"
              name="fade"
              class="btn btn-outline border text-secondary">
              {{ $t("header.headerLink")  }}
          </a>
          </div>
          <div class="col-lg-6 wow zoomIn">
            <div
              class="m-3 lg:m-3 p-1 lg:p-5">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_gnb0jsok.json"
                background="transparent"
                speed="1"
                style="max-width: 500px; max-height: 500px"
                autoplay></lottie-player>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
 import i18n from '../i18n/message';
  export default {
    name:"HeaderMain",
    mounted() {
      console.log(i18n,'i18ni18n');
      console.log(this.$i18n); // Output: en
      console.log(this.$t.locale,"ttttt");
    },
  };

</script>

<style></style>
