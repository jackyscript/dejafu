<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import MenuComponent from './components/MenuComponent.vue'
</script>

<template>
  <header>
    <!--img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /-->
    
    <HeaderComponent></HeaderComponent>
    <MenuComponent></MenuComponent>
    <nav class="nav container">
      <RouterLink to="/">Contact</RouterLink>
      <RouterLink to="/skills">Skills</RouterLink>
      <RouterLink to="/experience">Experience</RouterLink>
      <RouterLink to="/education">Education</RouterLink>
      <RouterLink to="/publication">Publications</RouterLink>
    </nav>
  </header>

  <RouterView />

  <footer class="container">
    <a href="#top">Go to top</a>
  </footer>
</template>

<style scoped>
.nav {
  padding: 20px;
  flex-wrap: wrap;
}
</style>

<style>
.router-link-exact-active {
  background-color: var(--pico-mark-background-color);
  color: var(--pico-mark-color);
}
</style>
