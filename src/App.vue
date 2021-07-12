<template>
  <div id="app">
    <Header />

    <router-view />
  </div>
</template>
<script>
import Header from "./components/layout/Header.vue";
import Home from "./views/customers/Home.vue";
export default {
  name: "App",
  components: {
    Header,
    Home,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  background-color: rgb(247, 248, 249);
}
a {
  text-decoration: none;
  color: black;
}
</style>
