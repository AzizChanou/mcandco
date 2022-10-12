import VueLazyload from 'vue-lazyload'
import { createApp } from 'vue'
import { i18n } from "./i18n";
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './style.css'

library.add(fab)
/* const loadimage = import('./assets/img/logo/black_logo.svg') */
/* const errorimage = import('./assets/img/logo/black_logo.svg') */
/*  */
createApp(App)
    .use(router)
    .use(i18n)
    .use(VueLazyload, {
        preLoad: 1.3,
        //error: errorimage,
        //loading: loadimage,
        attempt: 1
    })
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')