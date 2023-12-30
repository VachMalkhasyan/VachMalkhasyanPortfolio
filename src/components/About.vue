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
           About
            <span class="marked">Myself</span>
          </h2>
          <div class="divider"></div>

          <div>
            <p>
              I'm Vach, Full-Stack Web Developer with 2 years of experience from Armenia.
              I started my career of Web Developer since 2021.
            </p>
          </div>

          <div>
            <p>
              I'm a well organized person, problem solver, independent employee
              with high attention to details. Fan of reading and listening to music, outdoor
              activities with my friends, TV series and books about pschology and personal development.
            </p>
          </div>

          <div>
            <p class="hidden lg:flex">
              My main using programing languages is JavaScript and PHP.For front-end 
              part i usually work with React,Vue and Next for back-end part I use 
              Laravel  and  NodeJS's frameworks like Express.js, Nest.js.
            </p>
          </div>

          <div class="img-place mb-3"></div>
          <a href="#" class="btn btn-primary">More Details</a>
          <a href="#" class="btn btn-outline border ml-2">Success Stories</a>
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
            My
            <span class="marked">Skills & Experiences</span>
          </h2>
          <div class="divider"></div>
          <p class="mb-4">
            I’m a passionate full-stack JavaScript developer with a journey that began in 2021
             when I delved into programming independently. In 2022, I proudly graduated from 
             Relq Technology School, earning a certification to validate my skills.
          </p>
          <p class="mb-4">
              I gained
              hands-on experience working on Upwork for 10 months, focusing on React. Later,
               I spent 9 months at YogurtTeam as a Full Stack Developer, utilizing a diverse 
               tech stack including React, Nest, Next, Vue, Laravel, and both SQL and NoSQL
                databases. Excited to bring my expertise and enthusiasm to new challenges!
          </p>
          <p class="mb-4">
            I'm a student at ASUE, and my original major is finance. However, I've been transitioning 
            to the IT sphere because I didn't find myself enjoying the traditional finance role. My 
            aspiration is to combine my financial knowledge with my IT expertise to develop innovative
             products that will have a significant impact. I'm confident that both finance and IT will
              remain relevant and in high demand for the foreseeable future.   
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
