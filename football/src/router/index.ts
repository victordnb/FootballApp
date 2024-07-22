import { createRouter, createWebHistory } from 'vue-router';
// Corrige la importación de jwt-decode
import * as jwtDecode from 'jwt-decode';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Admin from '../components/AdminPanel.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { requiresAuth: true, requiresAdmin: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('authToken');
//   const isAuthenticated = token != null;
  
//   if (!isAuthenticated && to.meta.requiresAuth) {
//     next({ name: 'Login' }); // Asegúrate de que el nombre de la ruta es correcto (case-sensitive)
//   } else if (isAuthenticated && to.meta.requiresAdmin) {
//     // Asegúrate de que el token es un string antes de decodificar
//     if (typeof token === 'string') {
//       // Decodifica el token para verificar si el usuario es admin
//       const decoded = jwtDecode(token); // Asegúrate de que jwtDecode está correctamente importado
//       if (decoded.isAdmin) {
//         next();
//       } else {
//         next({ name: 'Home' });
//       }
//     } else {
//       // Manejar el caso en que el token no es un string o no está presente
//       next({ name: 'Login' });
//     }
//   } else {
//     next();
//   }
// });

router.beforeEach((to, from, next) => {
  // Utiliza un token de prueba directamente en el código
  const token = 'TU_TOKEN_DE_PRUEBA_AQUÍ';
  const isAuthenticated = token != null;
  const isAdmin = true; // Cambia a false para probar el caso en que el usuario no es admin

  
  if (!isAuthenticated && to.meta.requiresAuth) {
    next({ name: 'Login' }); // Asegúrate de que el nombre de la ruta es correcto (case-sensitive)
  } else if (isAuthenticated && to.meta.requiresAdmin) {
    // Asegúrate de que el token es un string antes de decodificar
    if (typeof token === 'string') {
      // Decodifica el token para verificar si el usuario es admin
      const decoded = token // Asegúrate de que jwtDecode está correctamente importado
      if (isAdmin) {
        next();
      } else {
        next({ name: 'Home' });
      }
    } else {
      // Manejar el caso en que el token no es un string o no está presente
      next({ name: 'Login' });
    }
  } else {
    next();
  }
});

export default router;