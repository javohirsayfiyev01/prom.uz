// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../store/auth.js';
import AdminDashboard from '../pages/Admin/AdminDashboard.vue';
import Home from '../pages/User/Home.vue';
import About from '../pages/User/About.vue';
import Login from '../pages/Login.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]

});



export default router;
