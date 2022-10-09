import {
    createRouter,
    createWebHashHistory
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
        path: '/contact#contact',
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
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    
    let documentTitle = `${import.meta.env.VITE_APP_TITLE} - ${to.name}`
    if (to.params.title) {
        documentTitle = `${import.meta.env.VITE_APP_TITLE} - ${to.params.title}`
    }
    document.title = documentTitle
    next()
})

export default router