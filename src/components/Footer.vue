<script setup>
const whiteLogo = "src/assets/img/logo/white_logo.svg";
</script>

<template>
  <footer id="footer" class="mt-16 bg-black text-white text-lg font-medium">
    <div class="relative max-w-screen-xl px-4 py-16 mx-auto sm:px-6 md:px-8 md:pt-24">
      <div class="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8">
        <router-link :to="{hash:'#head'}"
          class="inline-block p-2 transition border-2 border-white bg-transparent text-white rounded-full sm:p-3 md:p-4 hover:bg-white hover:text-black"
          href="#head">
          <span class="sr-only">Retour en haut</span>

          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd" />
          </svg>
        </router-link>
      </div>

      <div class="md:flex md:items-end md:justify-between">
        <div>
          <p class="max-w-md mx-auto leading-relaxed text-center text-2xl md:text-left">
            Vous avez une idée, un projet, nous pouvons vous aider à les
            concrétiser de manière optimale.
            <span>Contactez-nous:
              <a href="mailto:hello@mcandco.studio" class="text-orange-400">hello@mcandco.studio</a></span>
          </p>

          <div class="flex mt-6 justify-center md:justify-start">
            <img v-lazy="whiteLogo" alt="" class="w-2/5 md:w-1/5 lg:w-2/5" />
          </div>
        </div>

        <nav class="mt-12 md:mt-0" aria-labelledby="footer-navigation">
          <div class="text-center md:text-left mb-6 space-y-4">
            <div class="">
              <h4 class="text-2xl">Benin</h4>
              <div class="mt-4">
                <div class="space-x-4">
                  <i class="fi-sr-phone-call text-orange-400"></i><a href="tel:+22991705050">+229-9170-5050</a>
                </div>
                <div class="space-x-4">
                  <i class="fi-sr-location-alt text-orange-400"></i><span>Cotonou, Missite</span>
                </div>
              </div>
            </div>

            <div class="sm:mt-6">
              <h4 class="text-2xl">Afrique du sud</h4>
              <div class="mt-4">
                <div class="space-x-4">
                  <i class="fi-sr-phone-call text-orange-400"></i><a href="tel:+27790370354">+27-790-370-354</a>
                </div>
                <div class="space-x-4">
                  <i class="fi-sr-location-alt text-orange-400"></i><span>Cape Town, The Six</span>
                </div>
              </div>
            </div>
          </div>
          <h2 class="sr-only" id="footer-navigation">Footer navigation</h2>

          <div class="flex flex-wrap justify-center gap-6 md:justify-end md:gap-8 lg:gap-10">
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
        </nav>
      </div>

      <p class="mt-12 text-sm text-center md:text-right">
        Copyright &copy; 2022. All rights reserved.
      </p>
    </div>
  </footer>
</template>
