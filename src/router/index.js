import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ExperiencesView from '../views/ExperiencesView.vue'
import ProjectsView from '../views/projects/ProjectsView.vue'
import ProjectDetails from '../views/projects/ProjectsDetails.vue'
import error404 from '../views/error404.vue'
import '../assets/css/global.css'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about-me',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: AboutView
  },
  {
    path: '/experiences',
    name: 'ExperiencesView',
    component: ExperiencesView
  },
  {
    path: '/projects',
    name: 'ProjectsView',
    component: ProjectsView
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetails',
    component: ProjectDetails,
    props: true
  },
  // Redirection
  {
    path: '/all-projects',
    redirect: '/projects'
  },
  // 404 not found
  {
    path: '/:catchAll(.*)',
    name: 'error404',
    component: error404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
