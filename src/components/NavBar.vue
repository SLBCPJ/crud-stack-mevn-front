<template>
  <div>
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>MY APP</v-toolbar-title>
      <v-btn text :to="{path: '/'}">
        <span class="mr-2">Home</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text v-for="(item,index) in routes" :key="index" @click="insertRoute(item.path)">
        <span class="mr-2">{{item.name}}</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text :to="{path: '/auth/register'}">
        <span class="mr-2">Register</span>
      </v-btn>
      <v-btn text :to="{path: '/auth/login'}">
        <span class="mr-2">Login</span>
      </v-btn>

      <v-btn text to="logout" @click.prevent="logoutUser">
        <span class="mr-2">Logout</span>
      </v-btn>
    </v-app-bar>
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
            <v-list-item-title :to="{ path: '/' }">{{
            item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "NavBar",
  // computed: {
  //   ...mapGetters(['isLoggedIn'])
  // },
  data() {
    return {
      routes: [
        { name: "About", path: "/about" },
        { name: "Products", path: "/product" },
        { name: "Images", path: "/images" },
        { name: "Clients", path: "/client" },
        { name: "Register", path: "/auth/register" },

      ],
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
  methods: {
    ...mapActions('logout'),
    logoutUser() {
      this.logout()
    },
    insertRoute(route) {
      this.$router.push(route);
    },
  },
};
</script>
