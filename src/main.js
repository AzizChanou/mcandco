import VueLazyload from 'vue-lazyload'
import { createApp } from 'vue'
import { i18n } from "./i18n";
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './style.css'

library.add(faFacebook, faInstagram, faLinkedin, faTwitter)

createApp(App)
    .use(router)
    .use(i18n)
    .use(VueLazyload, {
        preLoad: 1.3,
        attempt: 1,
        listenEvents: ['scroll'],
        observer: true,
        observerOptions: {
            rootMargin: '0px',
            threshold: 0.1
        }
    })
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')