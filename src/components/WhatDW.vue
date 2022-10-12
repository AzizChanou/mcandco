<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Keyboard, Mousewheel, Pagination } from "swiper";
import "swiper/css";

</script>

<template>
  <div id="cta" class="max-w-screen-2xl mx-auto text-white">
    <swiper dir="rtl" :modules="[Pagination, Keyboard, Mousewheel]" :pagination="{
      clickable: true,
    }" :keyboard="true" :mousewheel="true" @reach-end="">
      <swiper-slide id="carousel-item-1" class="relative h-[80vh] bg-cover bg-center flex items-center"
        style="background-image: url('https://picsum.photos/600/300');">
        <div class="absolute h-full w-full flex items-center bg-gradient-to-r from-transparent to-yellow-600">
          <div class="w-full max-w-screen-xl mx-auto">
            <div class="md:w-1/2 border-green mr-6 items-start">
              <h3 class="text-6xl md:text-7xl xl:text-8xl font-dinprobold uppercase">
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
              <h3 class="text-6xl md:text-7xl xl:text-8xl font-dinprobold uppercase">
                Strategie de marque
              </h3>
              <p class="text-2xl md:text-3xl xl:text-4xl capitalize">
                Clarifier le pourquoi de votre marque et définir des objectifs
                pertinents
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>