<script setup>
import Project from "../components/Project.vue";
import projects from "../../db/projects.json"

</script>

<template>
  <div id="projects">
    <section>
      <div class="max-w-screen-xl px-4 x py-8 mx-auto">
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
        <div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-8">
          <Project v-for="project in projects" :key="project.name" :project="project" />
        </div>
      </div>
      <div class="mt-8 items-center justify-center flex">
        <router-link :to="{ name: 'Projects' }"
          class="block px-5 py-3 font-medium text-black bg-transparent border-2 border-black rounded-lg shadow-sm hover:bg-black hover:text-white duration-500">
          Voir plus
        </router-link>
      </div>
    </section>
  </div>
</template>
