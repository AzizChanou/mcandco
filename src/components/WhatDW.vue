<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Keyboard, Pagination, Autoplay } from "swiper";
import "swiper/css";

</script>

<template>
  <div id="cta" class="max-w-screen-2xl mx-auto text-white">
    <swiper dir="rtl" :modules="[Autoplay, Pagination, Keyboard]" :free-mode="true" :autoplay="true" :pagination="{
      clickable: true,
    }" :loop="true" :speed="1000">
      <swiper-slide id="carousel-item-1" class="relative h-[80vh] bg-cover bg-center flex items-center"
        style="background-image: url('https://picsum.photos/600/300');">
        <div class="absolute h-full w-full flex items-center bg-gradient-to-r from-transparent to-yellow-600">
          <div class="w-full max-w-screen-xl mx-auto">
            <div class="md:w-1/2 border-green mr-6 items-start">
              <h3 class="text-4xl md:text-7xl xl:text-8xl font-dinprobold uppercase">
                Strategie de marque
              </h3>
              <p class="text-2xl md:text-3xl xl:text-4xl font-medium capitalize">
                Clarifier le pourquoi de votre marque et définir des objectifs
                pertinents
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide id="carousel-item-2" class="relative h-[80vh] bg-cover bg-center flex items-center"
        style="background-image: url('https://picsum.photos/600/300');">
        <div class="absolute h-full w-full flex items-center bg-gradient-to-r from-transparent to-yellow-600">
          <div class="w-full max-w-screen-xl mx-auto">
            <div class="md:w-1/2 border-green mr-6 items-start">
              <h3 class="text-4xl md:text-7xl xl:text-8xl font-dinprobold uppercase">
                Relations Publiques/Médias
              </h3>
              <p class="text-2xl md:text-3xl xl:text-4xl capitalize">
                Gérer la réputation de votre marque, auprès de votre public cible
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide id="carousel-item-3" class="relative h-[80vh] bg-cover bg-center flex items-center"
        style="background-image: url('https://picsum.photos/600/300');">
        <div class="absolute h-full w-full flex items-center bg-gradient-to-r from-transparent to-yellow-600">
          <div class="w-full max-w-screen-xl mx-auto">
            <div class="md:w-1/2 border-green mr-6 items-start">
              <h3 class="text-4xl md:text-7xl xl:text-8xl font-dinprobold uppercase">
                Publicité
              </h3>
              <p class="text-2xl md:text-3xl xl:text-4xl capitalize">
                Faire accroître la notoriété de votre marque, via divers canaux
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide id="carousel-item-4" class="relative h-[80vh] bg-cover bg-center flex items-center"
        style="background-image: url('https://picsum.photos/600/300');">
        <div class="absolute h-full w-full flex items-center bg-gradient-to-r from-transparent to-yellow-600">
          <div class="w-full max-w-screen-xl mx-auto">
            <div class="md:w-1/2 border-green mr-6 items-start">
              <h3 class="text-4xl md:text-7xl xl:text-8xl font-dinprobold uppercase">
                Content/Digital Marketing
              </h3>
              <p class="text-2xl md:text-3xl xl:text-4xl capitalize">
                Donner vie à votre marque, à travers de la création de contenus et un plan de communication digitale
                pertinent
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>