import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import router from './router'
import api from './api/index'


const app = createApp(App)
.use(router)
.provide('api', api)
.mount('#app')

