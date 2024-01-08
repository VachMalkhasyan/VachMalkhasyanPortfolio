<template>
  <div class="bg-white page-section pt-5 -mb-5" id="aboutId">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 py-3 wow zoomIn">
          <div class="img-place text-center hidden lg:flex">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_qhrndegx.json"
              background="transparent"
              speed="1"
              style="max-width: 500px; max-height: 500px"
              autoplay></lottie-player>
          </div>
        </div>

        <div class="col-lg-6 p-4">
          <h2 class="title-section text-2xl">
            {{ $t("about.aboutTitle")  }}
            <span class="marked"> {{ $t("about.aboutTitle1")  }}</span>
          </h2>
          <div class="divider"></div>

          <div>
            <p>
              {{ $t("about.descriptionVach")  }}
            </p>
          </div>

          <div>
            <p>
              {{ $t("about.descriptionSoftSkills")  }}
            </p>
          </div>

          <div>
            <p class="hidden lg:flex">
              {{ $t("about.descriptionProgSkills")  }}
            </p>
          </div>

          <div class="img-place mb-3"></div>
        </div>
      </div>
    </div>
    <!-- .container -->
  </div>
  <!-- .page-section -->

  <div class="bg-green-50 page-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 p-4 -mt-9 lg:mt-0">
          <h2 class="title-section text-2xl">
            {{ $t("about.aboutTitle2")  }}
            <span class="marked">{{ $t("about.aboutTitle3")  }}</span>
          </h2>
          <div class="divider"></div>
          <p class="mb-4">
            {{ $t("about.descriptionExperience")  }}
          </p>
          <p class="mb-4">
            {{ $t("about.descriptionExperience1")  }}
          </p>
          <p class="mb-4">
            {{ $t("about.descriptionExperience2")  }}  
          </p>
          <p class="mb-5 hidden lg:flex">
          </p>

          <!-- <router-link to="/blog" class="btn btn-primary">My Blogs</router-link>
          <router-link to="/projects" class="btn btn-outline ml-2">
            My Projects
          </router-link> -->
        </div>
        <div class="col-lg-6 py-3 wow zoomIn">
          <div class="img-place text-center">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_u4jjb9bd.json"
              background="transparent"
              speed="0.5"
              style="max-width: 550px; max-height: 550px"
              loop
              autoplay>
            </lottie-player>
          </div>
        </div>
      </div>
    </div>
    <!-- .container -->
  </div>
</template>

<script>
export default {
  name:"AboutMe"
};
</script>

<style></style>
