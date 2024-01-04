<template>
  

<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024  All Rights Reserved.</span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li class="hover:underline me-4 md:me-6" 
          v-for="(link, index) in navLinks" :key="index"
          @click=nav(link)>
              <span class="flex-1 ml-2 whitespace-nowrap">{{link.text}}</span>
          </li>
      </ul>
    </div>
</footer>

</template>

<script>


export default {
  name: "FooterM",
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
}
},
methods: {
    nav(link) {
      // Delay the scroll operation until after the component has mounted
      this.$nextTick(() => {
        const position = document.getElementById(link.id).offsetTop - 70
        console.log(position, 'positionposition')
        window.scrollTo({ top: position, behavior: 'smooth' })
      })
    },
  }
};

</script>

<style></style>
