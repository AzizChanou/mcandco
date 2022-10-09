<script setup>
defineProps({
  member: {}
})
</script>

<template>
  <div class="shadow rounded">
    <img v-lazy="member.picture" :alt="'Picture of'" class="rounded-t" />
    <div class="space-y-4 p-4">
      <div class="font-semibold text-xl">{{member.fullname}}</div>
      <div class="font-medium uppercase">{{member.rule}}</div>
      <div class="flex flex-row space-x-4">
        <a :href="member.facebook" target="blank">
          <font-awesome-icon icon="fa-brands fa-facebook" class="hover:scale-105 hover:text-blue-400 duration-500"/>
        </a>
        <a :href="member.instagram" target="blank">
          <font-awesome-icon icon="fa-brands fa-instagram" class="hover:scale-105 hover:text-red-400 duration-500"/>
        </a>
        <a :href="member.linkedin" target="blank">
          <font-awesome-icon icon="fa-brands fa-linkedin" class="hover:scale-105 hover:text-blue-500 duration-500"/>
        </a>
        <a :href="member.twitter" target="blank">
          <font-awesome-icon icon="fa-brands fa-twitter" class="hover:scale-105 hover:text-blue-300 duration-500"/>
        </a>
      </div>
    </div>
  </div>
</template>
