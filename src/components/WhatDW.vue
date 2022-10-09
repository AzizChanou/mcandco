<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
</script>

<template>
  <div id="part" class="max-w-screen-xl mx-auto">
    <swiper
      dir="rtl"
      :modules="[Navigation, Pagination]"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      class="mySwiper"
    >
      <swiper-slide
        id="carousel-item-1"
        class="relative block md:flex items-center"
        style="min-height: 50vh"
      >
        <div
          id="img "
          class="relative w-full md:w-2/5 h-full overflow-hidden md:-t-none"
        >
          <img
            vy-lazy="'src/assets/img/logo/yellow_pattern.svg'"
            class="absolute inset-0 w-full h-full object-cover object-center"
            alt=""
          />
          <div class="absolute inset-0 w-full h-full bg-black opacity-75"></div>
          <div
            class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white"
          >
            <h3
              class="font-medium text-5xl uppercase font-sans tracking-[-.2rem] pl-16"
            >
              Strategie de marque
            </h3>
          </div>
        </div>
        <div class="w-full md:w-3/5 h-full flex items-center">
          <div class="p-12 md:pr-24 md:pl-16 md:py-12 h-full overflow-hidden">
            <p class="text-gray-600 text-4xl font-medium capitalize">
              Clarifier le pourquoi de votre marque et définir des objectifs
              pertinents
            </p>
          </div>
          <svg
            class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
</style>
