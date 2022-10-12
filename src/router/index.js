import {
    createRouter,
    createWebHistory
} from "vue-router";
import Home from "../views/Home.vue"
import Contact from "../views/Contact.vue"
import Projects from "../views/Projects.vue"
import Project from "../views/Project.vue"
import Team from "../views/Team.vue"
import Error404 from "../views/Error404.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
    },
    {
        path: '/project/:name',
        name: 'Project',
        component: Project,
        props: true
    },
    {
        path: '/team',
        name: 'Team',
        component: Team,
    },
    {
        path: '/:catchAll(.*)',
        name: 'Error404',
        component: Error404,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        } else {
            return { top: 0, left: 0, behavior: 'smooth' }
        }
    }
})

router.beforeEach((to, from, next) => {

    let documentTitle = `${to.name} - ${import.meta.env.VITE_APP_TITLE}`
    if (to.params.title) {
        documentTitle = `${to.params.title} - ${import.meta.env.VITE_APP_TITLE}`
    }
    document.title = documentTitle
    next()
})

export default router