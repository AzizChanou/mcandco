<script setup>
import PartnerLogo from "./PartnerLogo.vue";
</script>

<template>
  <div id="partenaires">
    <section>
      <div class="max-w-screen-2xl px-4 py-8 mx-auto">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold sm:text-4xl">Nos partenaires</h2>

          <p class="mt-4 text-justify">
            Nous créons des stratégies de marque qui englobent tous les points
            de contact d’une expérience client réussie.
          </p>
        </div>
        <div class="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-12 items-center">
          <PartnerLogo />
          <PartnerLogo />
          <PartnerLogo />
        </div>
      </div>
    </section>
  </div>
</template>
