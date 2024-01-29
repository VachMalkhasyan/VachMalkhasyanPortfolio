<template>
    <div class="p-3 border-gray-200 rounded bg-green-50 dark:bg-gray-800 dark:border-gray-700 border-solid border-stone-950	 lg:fixed z-10 w-full	">
    
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "NavbarMobile",
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
      };
    },
    methods: {
      nav(link) {
        this.$nextTick(() => {
          const position = document.getElementById(link.id).offsetTop - 70
          console.log(position, 'positionposition')
          window.scrollTo({ top: position, behavior: 'smooth' })
        })
      },
    },
  };
  </script>
