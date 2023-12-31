<template>
  <v-footer class="d-flex flex-column bg-green-50">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <strong>Get connected with me on social networks!</strong>
      <div class="d-flex flex-row ">
          <img width="40" height="40" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
          <img width="40" height="40" src="https://img.icons8.com/fluency/48/discord-logo.png" alt="discord-logo"/>
      </div>
      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
    </div>

    <div class="px-4 py-2 text-center w-100 bg-green-50">
      {{ new Date().getFullYear() }}
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "FooterM",
};
</script>

<style></style>
