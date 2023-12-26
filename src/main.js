import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/argon-design-system.min.css'
import './assets/style.css'
import './assets/font-awesome/css/all.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'Index', component: () => import("./pages/Index.vue") },
        { path: '/notfound', name: 'Not Found', component: () => import("./pages/NotFound.vue") },
        { path: '/test/:id', name: 'Test', component: () => import("./pages/Test.vue") }
    ]
})


createApp(App).use(router).mount('#app')
