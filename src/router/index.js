import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About'

const routes = [{
    path: '/about',
    name: 'About',
    components: About,
}]
console.log(About)
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router