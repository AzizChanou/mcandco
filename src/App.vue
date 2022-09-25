<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import NavMenu from "./components/NavMenu.vue";
</script>

<template>
  <Header />
  <NavMenu />
  <router-view></router-view>
  <Footer />
</template>
