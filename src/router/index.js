import Vue from 'vue'
import Router from 'vue-router'

const Category = ()=>import('views/Category/Category')
const Home = ()=>import("views/Home/Home")
const Profile = ()=>import("views/Profile/Profile")
const Shopcart = ()=>import("views/Shopcart/Shopcart")




Vue.use(Router)


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcart',
    component: Shopcart
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
