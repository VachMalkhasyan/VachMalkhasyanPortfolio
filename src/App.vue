<template>
  <transition name="fade" mode="out-in" @before-enter="beforeEnter" appear>
    <router-view :blog="blog"></router-view>
  </transition>
</template>

<script>
import Blog from './data/data.js'
import ProjectData from './data/projects.js'

export default {
  name: 'App',
  data () {
    return {
      blog: Blog,
      project: ProjectData
    }
  },

  methods: {
    beforeEnter () {
      this.$root.$emit('scrollBeforeEnter')
    }
  },

  components: {}
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 350ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);
  border-radius: 20px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(108, 183, 113);
  border-radius: 15px;
}
</style>

