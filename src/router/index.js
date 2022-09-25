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
        component: Home,
        name: 'Home'
    },
    {
        path: '/contact',
        component: Contact,
        name: 'Contact'
    },
    {
        path: '/projects',
        component: Projects,
        name: 'Projects'
    },
    {
        path: '/project/*',
        component: Project,
        name: 'Project'
    },
    {
        path: '/team',
        component: Team,
        name: 'Team'
    },
    {
        path: '/:catchAll(.*)',
        component: Error404,
        name: 'NotFound'
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router