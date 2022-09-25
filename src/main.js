import VueLazyload from 'vue-lazyload'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style.css'

const loadimage = import('./assets/img/logo/black_logo.svg')
const errorimage = import('./assets/img/logo/black_logo.svg')

createApp(App)
    .use(router)
    .use(VueLazyload, {
        preLoad: 1.3,
        error: errorimage,
        loading: loadimage,
        attempt: 1
    })
    .mount('#app')
