<script setup></script>

<template>
  <div class="hover:scale-95 duration-500">
    <a href="/projects">
      <div>
        <img v-lazy="'src/assets/img/projects/cm_1.png'" alt="" class="" />
      </div>
      <div class="p-6 space-y-3 bg-white">
        <h3 class="text-lg text-gray-800">Le club des Minions</h3>
        <p class="text-xl text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </a>
  </div>
</template>
