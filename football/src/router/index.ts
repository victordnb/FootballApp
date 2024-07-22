import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Asegúrate de tener este componente

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Agrega más rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;