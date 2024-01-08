<template>
    <div class="locale-changer">
      <select v-model="$i18n.locale" class="rounded-xl">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="getLanguageCode(lang)">
          {{ lang }}   
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: 'locale-changer',
    data () {
      return { 
        langs: ['Հայերեն', 'English', 'Русский'],
      }
    },
    methods: {
    getLanguageCode(lang) {
      const languageCodes = {
        "Հայերեն": 'hy',
        "English": 'en',
        "Русский": 'ru',
      };
      return languageCodes[lang];
    },
  },
  }
  </script>