<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Menu </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <!-- :toを追加 -->
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app elevation="0" color="#ffffff">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>小川染色株式会社</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
      <v-tabs right hide-slider active-class="font-weight-bold black--text" >
        <v-tab :ripple="false">小川染色について</v-tab>
        <v-tab :ripple="false">染色加工</v-tab>
        <v-tab :ripple="false">設備紹介</v-tab>
        <v-tab :ripple="false">会社概要</v-tab>
        <v-tab :ripple="false">お問い合わせ</v-tab>
        <v-tab :ripple="false">お知らせ</v-tab>
        <v-tab :ripple="false" to="/shop">色糸パレット</v-tab>
        <v-tab :ripple="false">するりぃと</v-tab>
      </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <!-- 追加 -->
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    drawer: null,

    items: [
      { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
      { title: "Shop", icon: "mdi-help-box", to: "/shop" },
    ],
  }),
});
</script>
