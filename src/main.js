import VueLazyload from 'vue-lazyload'
import { createApp } from 'vue'
import { createI18n } from "vue-i18n";
import App from './App.vue'
import router from './router'
import messages from "@intlify/unplugin-vue-i18n/messages";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './style.css'

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: import.meta.env.VITE_APP_I18N_LOCALE,
    fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE,
    availableLocales: [import.meta.env.VITE_APP_I18N_LOCALE, import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE],
    messages: messages,
});


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
