<script setup>

defineProps({
  project: {}
})

const truncate = function (string, limit) {
  return string.slice(0, limit) + "...";
};
</script>

<template>
  <div class="hover:scale-95 duration-500 shadow">
    <router-link :to="{name: 'Project', params: {name: project.name}}">
      <div>
        <img v-lazy="project.picture[1]" :alt="project.name" />
      </div>
      <div class="p-6 space-y-3 bg-white">
        <h3 class="text-xl text-gray-800">{{project.name}}</h3>
        <p class="text-lg text-gray-400">
          {{truncate(project.description, 50)}}
        </p>
      </div>
    </router-link>
  </div>
</template>
