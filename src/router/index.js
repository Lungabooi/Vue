import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "resume" */ '../views/Resume.vue')
  },{
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "Testimonial" */ '../views/Projects.vue')
  },
  {
    path: '/Testimonials',
    name: 'Testimonials',
    component: () => import(/* webpackChunkName: "Testimonial" */ '../views/Testimonials.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/Skills',
    name: 'Skills',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Skills.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
