<template>
  <div>
    <v-toolbar app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  <!--     <router-link :to="{path: '/'}">
      <v-toolbar-title >MY APP</v-toolbar-title>
      </router-link> -->
      <v-tabs align-with-title>
          <v-tab :to="{path: '/'}">MY APP</v-tab>
         <!--  <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab> -->
        </v-tabs>
      <v-spacer></v-spacer>
      <!-- <router-link to="/login"> -->
        <v-btn icon :to="{path: '/login'}">
          <v-icon>mdi-export</v-icon>
        </v-btn>
    <!-- </router-link> -->
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title :to="{path: '/'}">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
};
</script>
