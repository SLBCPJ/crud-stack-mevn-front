import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "../views/auth/Login.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "products" */ '../views/products/Products.vue')
  },
  {
    path: '/client',
    name: 'Client',
    component: () => import(/* webpackChunkName: "products" */ '../views/clients/Client.vue')
  },
  {
    path: '/images',
    name: 'images',
    component: () => import(/* webpackChunkName: "products" */ '@/views/images/Images.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "products" */ '@/views/auth/Register.vue')
  },
  {
    path: "/auth/login",
    name: "Login",
    component: Login,
    meta: {
      requiresGuest: true
    },
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active"
})
router.beforeEach((to,from,next)=>{
  // console.log(to);
  let documentTitle = `${process.env.VUE_APP_TITLE} - ${to.name}`
  if (to.params.title) {
    documentTitle += ` - ${to.params.title}`
  }
  document.title = documentTitle
  next()
})

export default router
