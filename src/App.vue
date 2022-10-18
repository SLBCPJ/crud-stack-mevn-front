<template>
  <div id="app">
    <v-app>
      <NavBar />
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
  data: () => ({
    //
  }),
};
</script>

