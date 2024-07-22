```vue
<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login" class="login-container">
        <input v-model="credentials.username" type="text" placeholder="Username" />
        <input v-model="credentials.password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  
  const store = useStore();
  const router = useRouter();
  const credentials = ref({ username: '', password: '' });
  
  const login = async () => {
    // Aquí iría la lógica para loguearse y obtener el token
    // Simularemos un token falso por ahora
    const token = 'fake-token';
    
    // Guardar el token en el store de Vuex o en localStorage
    localStorage.setItem('authToken', token);
    
    // Redirigir al usuario a la página principal después del login
    router.push('/');
  };
  </script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-container form {
  display: flex;
  flex-direction: column;
}

input[type="text"],
input[type="password"] {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="text"]:focus,
input[type="password"]:focus {
  border-color: #007bff;
  outline: none;
}

button[type="submit"] {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>