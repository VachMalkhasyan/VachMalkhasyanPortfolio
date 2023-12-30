<template>
  <nav class="p-3 border-gray-200 rounded bg-green-50 dark:bg-gray-800 dark:border-gray-700 lg:fixed z-10 w-full	">
  <div class="container flex flex-wrap items-center justify-between mx-auto ">
      <div>
        <a href="">
          <lord-icon
            src="https://cdn.lordicon.com/ffpklhrd.json"
            trigger="hover"
            style="width:50px;height:50px">
          </lord-icon>
        </a>
      </div>
      <div class="hidden w-full md:block md:w-auto">
        <ul
          class="flex flex-col mt-4 rounded-lg text-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li class="flex items-center hover:-mt-1 hover:no-underline bg-green-50 p-2 ml-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700" v-for="(link, index) in navLinks" :key="index"
                @mouseover="hover = true"
                @mouseleave="hover = false"
                :class=" { active: hover } "
                @click=nav(link)
                >
                <span class="flex-1 ml-2 whitespace-nowrap">{{link.text}}</span>
            </li>
         
          <!-- <li>
            <router-link
              to="/"
              class="flex items-center p-2 ml-2 hover:no-underline"
              aria-current="page">
              <span class="flex-1 ml-2 whitespace-nowrap">Home</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="flex items-center p-2 ml-2 hover:no-underline"
              aria-current="page">
              <span class="flex-1 ml-2 whitespace-nowrap">Services</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="flex items-center p-2 ml-2 hover:no-underline"
              aria-current="page">
              <span class="flex-1 ml-2 whitespace-nowrap">About</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/projects"
              class="flex items-center p-2 ml-2 hover:no-underline"
              aria-current="page">
              <span class="flex-1 ml-2 whitespace-nowrap">Projects</span>
            </router-link>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      active: 0,
      navLinks: [
      {
        text: 'Home',
        id: 'headerId'
      },
      {
        text: 'Service',
        id: 'serviceId'
      },
      {
        text: 'About',
        id: 'aboutId'
      }
    ]
    };
  },
  // methods: {
  //   inActive() {
  //     this.active += 1;
  //   },
  //   nav(link) {
  //         const position = document.getElementById(link.id).offsetTop;
  //         console.log(position,'positionposition');
  //         window.scrollTo({ top: position, behavior: "smooth" });  
  //  }
  // },
  methods: {
    inActive() {
      this.active += 1;
    },
    nav(link) {
      // Delay the scroll operation until after the component has mounted
      this.$nextTick(() => {
        console.log(document.getElementById(link.id) ,111)
        const position = document.getElementById(link.id).offsetTop - 50
        console.log(position, 'positionposition')
        window.scrollTo({ top: position, behavior: 'smooth' })
      })
    }
  }

};
</script>

<style>
.fade-nav-enter-active,
.fade-nav-leave-active {
  transition: opacity 0.5s ease;
}

.fade-nav-enter-from,
.fade-nav-leave-to {
  opacity: 0;
}

.vue-school-active-link {
  background-color: rgb(225, 255, 228);
  padding: 5px 12px;
  border-radius: 10px;
  text-decoration: none;
}
</style>
