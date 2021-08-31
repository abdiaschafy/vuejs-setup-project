import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { createI18n } from 'vue-i18n'

import '@popperjs/core'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import dashboardModule from './modules/dashboard'
import bookingsModule from './modules/bookings'
import vehiclesModule from './modules/vehicles'
import { registerModules } from './register-modules'

registerModules({
  dashboard: dashboardModule,
  bookings: bookingsModule,
  vehicles: vehiclesModule
})

const i18nConfig = {
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: require('@/i18n/en.json'),
    fr: require('@/i18n/fr.json')
  }
}

library.add(fas, far)

const app = createApp(App)
app.use(store)
app.use(router)
app.use(createI18n(i18nConfig))
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
