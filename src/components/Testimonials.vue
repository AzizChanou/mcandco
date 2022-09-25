<script setup>
import Testimonial from "../components/Testimonial.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
</script>

<template>
  <div id="projects">
    <section>
      <div class="max-w-screen-2xl px-4 x py-8 mx-auto">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold sm:text-4xl">Nos projets</h2>
          <p class="mt-4 text-justify">
            Chez Studio MC&Co, nous creons des strategies de marque qui
            englobent tous les points de contacts d'une experience client:
            l'identite de la marque, comment elle sonne, ses produits et comment
            vous la ressentez a la fois en ligne et dans la vie reele. nous
            veillons a ce que le resultat soit durable sur le long
            terme,consciencieux et minutieux.
          </p>
        </div>
        <div>
          <swiper
            dir="rtl"
            :modules="[Autoplay,FreeMode, Navigation, Pagination]"
            :navigation="true"
            :pagination="{
              clickable: true,
            }"
            class="mySwiper"
          >
            <swiper-slide>
              <Testimonial />
            </swiper-slide>
            <swiper-slide>
              <Testimonial />
            </swiper-slide>
            <swiper-slide>
              <Testimonial />
            </swiper-slide>
            <swiper-slide>
              <Testimonial />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
  </div>
</template>
