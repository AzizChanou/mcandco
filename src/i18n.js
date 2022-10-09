import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

// List of all locales.
export const allLocales = [import.meta.env.VITE_APP_I18N_LOCALE, import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE];

// Create Vue I18n instance.
export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: import.meta.env.VITE_APP_I18N_LOCALE,
    fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE,
    messages: messages,
});

// Set new locale.
export async function setLocale(locale) {
    // Load locale if not available yet.
    if (!i18n.global.availableLocales.includes(locale)) {
        const messages = await loadLocale(locale);

        // fetch() error occurred.
        if (messages === undefined) {
            return;
        }

        // Add locale.
        i18n.global.setLocaleMessage(locale, messages);
    }

    // Set locale.
    i18n.global.locale.value = locale;
}

// Fetch locale.
function loadLocale(locale) {
    return fetch(`./locales/${locale}.json`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Something went wrong!");
        })
        .catch((error) => {
            console.error(error);
        });
}