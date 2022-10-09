<script setup>
import ProfilMember from "../components/ProfilMember.vue";
import members from "../../db/members.json"
</script>

<template>
  <div id="team" class="max-w-screen-xl px-4 py-8 mx-auto">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
        Notre équipe
      </h2>

      <p class="max-w-4xl mx-auto mt-4 text-gring-offset-warm-gray-500">
        Nous sommes une équipe de consultants spécialisés, stratégiques et
        passionnés. Nous utilisons notre vaste expérience, au service de votre
        marque. Nous créons des solutions pertinentes, afin de mieux vous
        connecter à votre audience.
      </p>
    </div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8">
      <ProfilMember v-for="member in members" :key="member.fullname" :member="member" />
    </div>
  </div>
</template>
