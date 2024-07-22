import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Asegúrate de tener este componente
import Login from '../views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login, // Asegúrate de que el componente Login.vue exista
  },
  // Agrega más rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authToken');
  
  if (!isAuthenticated && to.name !== 'login') {
    // Redirigir al usuario a la pantalla de login si no está autenticado
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;