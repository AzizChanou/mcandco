<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import NavMenu from "./components/NavMenu.vue";
import { i18n } from "./i18n";

if (localStorage.getItem('lang') === 'en') {
  i18n.global.locale.value = 'en'
  document.getElementById('first').setAttribute('lang', 'en');
} else {
  i18n.global.locale.value = 'fr'
  document.getElementById('first').setAttribute('lang', 'en');

}
</script>

<template>
  <Header />
  <NavMenu />
  <router-view></router-view>
  <Footer />
</template>