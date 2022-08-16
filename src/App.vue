<template>
  <nav>
    <router-link to="/"><i class="fa-solid fa-house"></i></router-link> |
    <router-link to="/about"><i class="fa-brands fa-medapps"></i></router-link> |
    <router-link to="/resume"><i class="fa-solid fa-file-lines"></i></router-link> |
      <router-link to="/projects"><i class="fa-solid fa-diagram-project"></i></router-link> |
    <router-link to="/testimonials"><i class="fa-solid fa-people-group"></i></router-link> |
    <router-link to="/contact"><i class="fa-solid fa-address-book"></i></router-link>
    <!-- <button @click="changetheme">Change Theme</button> -->
  </nav>
  <router-view/>
</template>
<script>


</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
  background-color: beige;
}

nav a {
  font-weight: bold;
  color: #000000;
  font-size: 15px;
}

nav a.router-link-exact-active {
  color: #ecb10c;
}
</style>
