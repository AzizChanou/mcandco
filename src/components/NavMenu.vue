<script setup>
const whiteLogo = "/assets/logo/white_logo.svg";

const navMenu = document.querySelector("#navMenu");
navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menu.classList.toggle("w-full");
  menu.classList.toggle("w-0");
});

const men = () => {
  navMenu.classList.toggle("active");
  menu.classList.toggle("w-full");
  menu.classList.toggle("w-0");
}
</script>

<template>
  <div id="menu"
    class="transition-all ease-in-out duration-500 flex overflow-auto fixed top-0 text-white z-10 left-0 h-full bg-black flex-col justify-between md:hidden w-0">
    <div class="p-8 py-20">
      <ul class="flex flex-col space-y-6 font-medium divide-y-2 divide-y-reverse">
        <li></li>
        <li>
          <router-link :to="{ name: 'Home', hash:'#cta'  }" @click.stop="men()">
            {{$t("header.home")}}
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Team', hash:'#team'  }" @click.stop="men()">
            {{$t("header.team")}}
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Projects', hash:'#projects'  }" @click.stop="men()">
            {{$t("header.project")}}
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Contact', hash:'#contact' }" @click.stop="men()">
            {{$t("header.contact")}}
          </router-link>
        </li>
      </ul>
    </div>
    <span class="block justify-center p-10">
      <router-link :to="{ name: 'Home' }" @click.stop="men()">
        <img v-lazy="whiteLogo" alt="" class="w-2/5 mx-auto" />
      </router-link>
      <div class="flex flex-wrap justify-center gap-6 mt-6">
        <a href="https://web.facebook.com/studiomcandco" target="blank">
          <font-awesome-icon icon="fa-brands fa-facebook"
            class="hover:scale-105 hover:text-blue-400 text-xl duration-500" />
        </a>
        <a href="https://www.instagram.com/studiomcandco" target="blank">
          <font-awesome-icon icon="fa-brands fa-instagram"
            class="hover:scale-105 hover:text-red-400 text-xl duration-500" />
        </a>
        <a href="https://www.linkedin.com/company/studiomcandco" target="blank">
          <font-awesome-icon icon="fa-brands fa-linkedin"
            class="hover:scale-105 hover:text-blue-500 text-xl duration-500" />
        </a>
        <a href="https://twitter.com/studiomcandco" target="blank">
          <font-awesome-icon icon="fa-brands fa-twitter"
            class="hover:scale-105 hover:text-blue-300 text-xl duration-500" />
        </a>
      </div>
    </span>
  </div>
</template>
