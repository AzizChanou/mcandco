<script setup>
const whiteLogo = "src/assets/img/logo/white_logo.svg";
const yellowPattern = "src/assets/img/logo/yellow_pattern.svg";
</script>

<template>
  <div
    id="header"
    class="body bg-cover bg-center"
    :style="'background-image: url(\'' + yellowPattern + '\');'"
  >
    <div class="lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div id="nav">
      <header class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-28">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <a class="block" href="/">
              <span class="sr-only">Accueil</span>
              <img v-lazy="whiteLogo" alt="" class="w-2/5" />
            </a>
          </div>

          <div class="md:flex md:items-center md:gap-12">
            <nav class="hidden md:block" aria-labelledby="header-navigation">
              <h2 class="sr-only" id="header-navigation">En-tete navigation</h2>

              <ul class="flex items-center font-medium gap-6 text-sm">
                <li>
                  <a class="text-lg transition hover:text-gray-700" href="/">
                    Accueil
                  </a>
                </li>

                <li>
                  <a
                    class="text-lg transition hover:text-gray-700"
                    href="/team#team"
                  >
                    La Team
                  </a>
                </li>

                <li>
                  <a
                    class="text-lg transition hover:text-gray-700"
                    href="/projects#projects"
                  >
                    Nos Projets
                  </a>
                </li>

                <li>
                  <a
                    class="text-lg transition hover:text-gray-700"
                    href="/contact#contact"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </nav>

            <div class="flex items-center gap-4">
              <div class="hidden sm:gap-4 sm:flex">
                <a href="#"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 256"
                    style="
                      -ms-transform: rotate(360deg);
                      -webkit-transform: rotate(360deg);
                      transform: rotate(360deg);
                    "
                  >
                    <path
                      fill="#fff"
                      d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                    />
                    <path
                      fill="none"
                      d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"
                    /></svg
                ></a>
                <a href="#"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 256"
                    style="
                      -ms-transform: rotate(360deg);
                      -webkit-transform: rotate(360deg);
                      transform: rotate(360deg);
                    "
                  >
                    <path
                      fill="#fff"
                      d="M128 23.064c34.177 0 38.225.13 51.722.745c12.48.57 19.258 2.655 23.769 4.408c5.974 2.322 10.238 5.096 14.717 9.575c4.48 4.479 7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768c.615 13.498.745 17.546.745 51.723c0 34.178-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768c-2.322 5.974-5.096 10.239-9.575 14.718c-4.479 4.479-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408c-13.495.616-17.543.746-51.722.746c-34.18 0-38.228-.13-51.723-.746c-12.48-.57-19.257-2.655-23.768-4.408c-5.974-2.321-10.239-5.095-14.718-9.574c-4.479-4.48-7.253-8.744-9.574-14.718c-1.753-4.51-3.839-11.288-4.408-23.768c-.616-13.497-.746-17.545-.746-51.723c0-34.177.13-38.225.746-51.722c.57-12.48 2.655-19.258 4.408-23.769c2.321-5.974 5.095-10.238 9.574-14.717c4.48-4.48 8.744-7.253 14.718-9.575c4.51-1.753 11.288-3.838 23.768-4.408c13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95c-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155C3.555 52.297 1.392 61.602.77 75.226C.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774c.622 13.625 2.785 22.93 5.95 31.071c3.27 8.417 7.647 15.556 14.763 22.672c7.116 7.116 14.254 11.492 22.672 14.763c8.142 3.165 17.446 5.328 31.07 5.95c13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95c8.418-3.27 15.556-7.647 22.672-14.763c7.116-7.116 11.493-14.254 14.764-22.672c3.164-8.142 5.328-17.446 5.95-31.07c.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07c-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27c-36.302 0-65.73 29.43-65.73 65.73c0 36.302 29.428 65.73 65.73 65.73c36.301 0 65.73-29.428 65.73-65.73c0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36c-8.483 0-15.36-6.876-15.36-15.36c0-8.483 6.877-15.36 15.36-15.36c8.484 0 15.36 6.877 15.36 15.36Z"
                    /></svg
                ></a>
                <a href="#"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 256"
                    style="
                      -ms-transform: rotate(360deg);
                      -webkit-transform: rotate(360deg);
                      transform: rotate(360deg);
                    "
                  >
                    <path
                      fill="#fff"
                      d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009c-.002-12.157 9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                    /></svg
                ></a>
                <a href="#"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="1.23em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 209"
                    style="
                      -ms-transform: rotate(360deg);
                      -webkit-transform: rotate(360deg);
                      transform: rotate(360deg);
                    "
                  >
                    <path
                      fill="#fff"
                      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
                    /></svg
                ></a>
              </div>
              <button
                id="theme-toggle"
                type="button"
                class="text-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5"
              >
                <svg
                  id="theme-toggle-dark-icon"
                  class="w-8 h-8 hidden"
                  fill="#ffffff"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                  ></path>
                </svg>
                <svg
                  id="theme-toggle-light-icon"
                  class="w-8 h-8"
                  fill="#ffffff"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <button
                id="navMenu"
                class="sticky block z-20 md:hidden"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
    <aside id="ok" class="p-12 sm:p-16 lg:p-24">
      <div class="max-w-xl mx-auto text-center">
        <p class="text-4xl font-bold sm:text-7xl">MC&Co Team</p>

        <p class="mt-6 text-xl font-medium text-justify">
          Nous sommes une équipe de consultants spécialisés, stratégiques et
          passionnés. Nous utilisons notre vaste expérience, au service de votre
          marque. Nous créons des solutions pertinentes, afin de mieux vous
          connecter à votre audience.
        </p>

        <div class="mt-8 sm:items-center sm:justify-center sm:flex">
          <a
            href="/contact#contact"
            class="block px-5 py-3 font-medium text-white bg-transparent border-2 border-white rounded-lg shadow-sm hover:bg-white hover:text-black duration-500"
          >
            NOUS JOINDRE
          </a>
        </div>

        <div class="animate-bounce-slow mt-36 text-4xl sm:hidden">
          <a href="#part"> <i class="fi-sr-arrow-circle-down"></i></a>
        </div>
      </div>
    </aside>
  </div>
</template>

<style>
* {
  border-width: 0px;
}

html::-webkit-scrollbar {
  display: none;
  width: 0px;
}

html,
body {
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
}

*::-webkit-scrollbar {
  display: none;
}

#navMenu > span {
  display: block;
  width: 24px;
  height: 3px;
  border-radius: 99999px;
  background-color: white;
}

#navMenu > span:not(:last-child) {
  margin-bottom: 6px;
}

#navMenu,
#navMenu > span {
  transition: all 0.4s ease-in-out;
}

#navMenu.active {
  transition-delay: 0.2s;
  transform: rotate(45deg);
}

#navMenu.active > span:nth-child(2) {
  width: 0;
}

#navMenu.active > span:nth-child(1),
#navMenu.active > span:nth-child(3) {
  transition-delay: 0.4s;
}

#navMenu.active > span:nth-child(1) {
  transform: translateY(9px);
}

#navMenu.active > span:nth-child(3) {
  transform: translateY(-9px) rotate(90deg);
}

.body {
  display: table;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  line-height: 1.6;
  position: relative;
  font-family: sans-serif;
  overflow: hidden;
}

@media (min-width: 640px) {
  .body {
    height: 700px;
  }
}

.lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  width: 90vw;
  z-index: -99;
}

.line {
  position: absolute;
  width: 3px;
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
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    white 75%,
    white 100%
  );
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
