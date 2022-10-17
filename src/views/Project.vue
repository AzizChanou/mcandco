<script setup>
import { useRoute } from 'vue-router';
import projects from "../../db/projects.json"

const route = useRoute();
var project = {};

for (const newProject in projects) {
    if (route.params.title === projects[newProject].name) {
        project = projects[newProject];
    }
}

</script>

<template>
    <section id="project">
        <div class="max-w-screen-xl px-4 x py-8 mx-auto space-y-10">
            <div>
                <img v-lazy="project.picture[1]" :alt="project.name"
                    class="w-full h-[500px] object-cover object-center" />
            </div>
            <div class="space-y-12">
                <h2 class="text-5xl font-semibold">{{project.name}}</h2>

                <p v-for="paragraph in project.description" class="text-justify text-xl">
                    {{paragraph}}
                </p>

                <div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    <img v-for="picture in project.picture" v-lazy="picture" :alt="project.name"
                        class="shadow-sm hover:scale-105 duration-500">
                </div>

            </div>
            <div>
                <video controls src=""
                    poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217" class="w-full">
                </video>
            </div>
        </div>
    </section>
</template>
