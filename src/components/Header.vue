<script setup>
import LocalSelect from '@/components/LocalSelect.vue'

const whiteLogo = "/assets/logo/white_logo.svg";
const yellowPattern = "/assets/logo/yellow_pattern.svg";


const toggleDarkMode = () => {
  const html = document.querySelector('html');
  html.classList.toggle('dark')
  if (html.classList.contains('dark')) {
    document.getElementById('toggle-dark-icon').classList.add('hidden');
    document.getElementById('toggle-light-icon').classList.remove('hidden');
  } else {
    document.getElementById('toggle-light-icon').classList.add('hidden');
    document.getElementById('toggle-dark-icon').classList.remove('hidden');
  }
}
</script>

<template>
  <div id="head" class="body w-screen h-[700px] bg-center">
    <div class="first">
      <header class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-28">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <router-link :to="{ name: 'Home' }">
              <img v-lazy="whiteLogo" alt="" class="w-2/5" />
            </router-link>
          </div>

          <div class="md:flex md:items-center md:gap-12">
            <nav class="hidden md:block" aria-labelledby="header-navigation">

              <ul class="flex items-center font-medium gap-6 text-sm">
                <li>
                  <router-link :to="{ name: 'Home', hash:'#cta'  }" :active-class="'bg-white p-2 text-black rounded'"
                    class="text-lg transition hover:bg-white hover:text-black p-2 rounded duration-300">
                    {{$t("header.home")}}
                  </router-link>
                </li>

                <li>
                  <router-link :to="{ name: 'Team', hash:'#team'  }" :active-class="'bg-white p-2 text-black rounded'"
                    class="text-lg transition hover:bg-white hover:text-black p-2 rounded duration-300">
                    {{$t("header.team")}}
                  </router-link>
                </li>

                <li>
                  <router-link :to="{ name: 'Projects', hash:'#projects'  }"
                    :active-class="'bg-white p-2 text-black rounded'"
                    class="text-lg transition hover:bg-white hover:text-black p-2 rounded duration-300">
                    {{$t("header.project")}}
                  </router-link>
                </li>

                <li>
                  <router-link :to="{ name: 'Contact', hash:'#contact' }"
                    :active-class="'bg-white p-2 text-black rounded'"
                    class="text-lg transition hover:bg-white hover:text-black p-2 rounded duration-300">
                    {{$t("header.contact")}}
                  </router-link>
                </li>
              </ul>
            </nav>

            <div class="flex relative items-center gap-4">
              <div class="hidden sm:gap-4 sm:flex">
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

              <LocalSelect class="mr-8" />

              <button id="themeToggle" type="button" @click="toggleDarkMode()"
                class="hidden text-primary dark:text-white hover:animate-spin rounded-lg text-sm p-2 duration-1000">
                <svg id="toggle-dark-icon" class="w-8 h-8 hidden" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg id="toggle-light-icon" class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </button>

              <button id="navMenu" class="absolute right-0 block z-20 md:hidden">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div class="p-12">
        <div class="max-w-xl mx-auto text-center">
          <p class="text-4xl font-dinprobold sm:text-7xl">{{$t("header.title")}}</p>

          <p class="mt-6 text-xl font-medium text-justify">
            {{$t("header.welcome")}}
          </p>

          <div class="mt-8 sm:items-center sm:justify-center sm:flex">
            <router-link :to="{name: 'Contact', hash:'#contact'}"
              class="block px-5 py-3 font-medium text-white bg-transparent border-2 border-white rounded-lg shadow-sm hover:bg-white hover:text-black duration-500">
              {{$t("header.joinus")}}
            </router-link>
          </div>

          <div class="animate-bounce mt-36 text-sm">
            <router-link :to="{name: 'Home', hash: '#start'}" class="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8" viewBox="0 0 512 512" fill="currentColor">
                <path
                  d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM127 297c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 214.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 409c-9.4 9.4-24.6 9.4-33.9 0L127 297z" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
  <div id="start"></div>
</template>

<style>
#navMenu>span {
  display: block;
  width: 24px;
  height: 3px;
  border-radius: 99999px;
  background-color: white;
}

#navMenu>span:not(:last-child) {
  margin-bottom: 6px;
}

#navMenu,
#navMenu>span {
  transition: all 0.4s ease-in-out;
}

#navMenu.active {
  transition-delay: 0.2s;
  transform: rotate(45deg);
}

#navMenu.active>span:nth-child(2) {
  width: 0;
}

#navMenu.active>span:nth-child(1),
#navMenu.active>span:nth-child(3) {
  transition-delay: 0.4s;
}

#navMenu.active>span:nth-child(1) {
  transform: translateY(9px);
}

#navMenu.active>span:nth-child(3) {
  transform: translateY(-9px) rotate(90deg);
}

.body {
  display: table;
  color: white;
  line-height: 1.6;
  position: relative;
  overflow: hidden;
}

.lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  height: 100%;
  margin: auto;
  width: 100%;
  z-index: -1;
}

.line {
  position: absolute;
  width: 4px;
  height: 100%;
  top: 0;
  left: 50%;
  background: transparent;
  overflow: hidden;
}

.line::after {
  content: "";
  display: block;
  position: absolute;
  height: 15vh;
  width: 100%;
  top: -50%;
  left: 0;
  background: linear-gradient(to bottom,
      rgba(255, 255, 255, 0) 0%,
      white 75%,
      white 100%);
  -webkit-animation: drop 7s 0s infinite;
  animation: drop 7s 0s infinite;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
}

.line:nth-child(1) {
  margin-left: -25%;
}

.line:nth-child(1)::after {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}

.line:nth-child(3) {
  margin-left: 25%;
}

.line:nth-child(3)::after {
  -webkit-animation-delay: 2.5s;
  animation-delay: 2.5s;
}

@-webkit-keyframes drop {
  0% {
    top: -50%;
  }

  100% {
    top: 110%;
  }
}

@keyframes drop {
  0% {
    top: -50%;
  }

  100% {
    top: 110%;
  }
}
</style>
