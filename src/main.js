import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as bootstrap from 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import Vuelidate from 'vuelidate'

import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'


const app = createApp(App)

// components declarations
app.use(router)
app.use(bootstrap)
app.use(moshaToast)
app.use(Vuelidate)
app.use(VueSidebarMenu)
app.mount("#app")