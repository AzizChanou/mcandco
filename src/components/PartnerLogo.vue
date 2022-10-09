<script setup>

defineProps({
  project: {}
})

</script>

<template>
  <a :href="project.link" class="p-4 rounded flex justify-center h-[4.5rem] lg:h-[6rem]">
    <img v-lazy="project.logo" :aria-busy="project.name"/>
  </a>
</template>
