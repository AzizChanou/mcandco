<script setup>
import Testimonial from "@/components/Testimonial.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import testimonials from "../../db/testimonials.json"

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

</script>

<template>
  <div id="projects">
    <section>
      <div class="max-w-screen-xl px-4 x py-8 mx-auto">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold sm:text-4xl">Retours d’expérience</h2>
          <p class="hidden mt-4 text-justify">
            Chez Studio MC&Co, nous creons des strategies de marque qui
            englobent tous les points de contacts d'une experience client:
            l'identite de la marque, comment elle sonne, ses produits et comment
            vous la ressentez a la fois en ligne et dans la vie reele. nous
            veillons a ce que le resultat soit durable sur le long
            terme,consciencieux et minutieux.
          </p>
        </div>
        <div>
          <swiper :modules="[Autoplay, Pagination]" :free-mode="true" :autoplay="true" :pagination="{
            clickable: true,
          }" :loop="true" :speed="500">
            <swiper-slide v-for="testimonial in testimonials">
              <Testimonial :testimonial="testimonial" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
  </div>
</template>