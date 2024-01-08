<template>
  <nav class="p-3 border-gray-200 rounded bg-green-50 dark:bg-gray-800 dark:border-gray-700 border-solid border-stone-950	 lg:fixed z-10 w-full	">
  <div class="container flex flex-wrap items-center justify-between mx-auto ">
      <div class="flex text-align-center">
        <a href="">
          <img width="48" height="48" src="../assets/wired-lineal-680-it-developer.gif" alt="devGif">
        </a>
           <p>{{ displayedMessage }}</p>
      </div>
      <div class="hidden w-full md:block md:w-auto">
        <ul
          class="flex flex-col rounded-lg text-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li class="flex items-center hover:-mt-1 hover:no-underline bg-green-50 p-2 ml-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700" v-for="(link, index) in navLinks" :key="index"
                @click=nav(link)
                >
                <span class="flex-1 ml-2 whitespace-nowrap">{{link.text}}</span>
            </li>
            <LanguageSwitcher></LanguageSwitcher>
        </ul>
        
       
      </div>
    </div>
    <div class="md:hidden">
          <HamburgerMenu></HamburgerMenu>
        </div>
  </nav>
</template>

<script>
import HamburgerMenu from './HamburgerMenu.vue';
import LanguageSwitcher from './LanguageSwitcher.vue';
export default {
  name: "NavBar",
  components:{
    LanguageSwitcher,
    HamburgerMenu
},
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
      },
      {
        text: 'Contact',
        id: 'contactId'
      }
    ],
      message: '',
      index: 0,
      intervalId: null,
      messageText:"Welcome to my website!",
      displayedMessage:""
    };
  },
  mounted() {
    this.startTyping();
  },
  methods: {
    inActive() {
      this.active += 1;
    },
    nav(link) {
      // Delay the scroll operation until after the component has mounted
      this.$nextTick(() => {
        const position = document.getElementById(link.id).offsetTop - 70
        console.log(position, 'positionposition')
        window.scrollTo({ top: position, behavior: 'smooth' })
      })
    },
    startTyping() {
      this.intervalId = setInterval(() => {
        this.displayedMessage += this.messageText[this.index];
        this.index++;
        if (this.index === this.messageText.length) {
          this.index = 0;
          this.displayedMessage = '';
        }
      }, 400);
    },
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },


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
