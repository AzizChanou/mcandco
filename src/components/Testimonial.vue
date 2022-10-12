<script setup>
defineProps({
  testimonial: Object,
})

</script>

<template>
  <div class="container max-w-xl mx-auto mb-4">
    <div class="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8">
      <img v-lazy="'https://source.unsplash.com/random/100x100?4'" alt="" class="w-20 h-20 rounded-full" />
      <blockquote class="max-w-lg text-lg italic font-medium text-center">
        {{testimonial.text}}
      </blockquote>
      <div class="text-center">
        <p>{{testimonial.fullname}}</p>
        <p>{{testimonial.company}}</p>
      </div>
    </div>
  </div>
</template>
