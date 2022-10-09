<script setup>
import PartnerLogo from "./PartnerLogo.vue";
import projects from "../../db/projects.json"
</script>

<template>
  <div id="partenaires">
    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold sm:text-4xl">Nos partenaires</h2>

          <p class="mt-4 text-justify">
            Nous créons des stratégies de marque qui englobent tous les points
            de contact d’une expérience client réussie.
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-12 items-center">
          <PartnerLogo v-for="project in projects" :key="project.name" :project="project" />
        </div>
      </div>
    </section>
  </div>
</template>
