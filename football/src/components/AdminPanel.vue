<template>
    <div class="admin-panel">
      <h2>Panel de Administración</h2>
      <!-- Sección para crear usuarios -->
      <section>
        <h3>Crear Usuario</h3>
        <form @submit.prevent="createUser">
          <input v-model="newUser.username" type="text" placeholder="Nombre de usuario" />
          <input v-model="newUser.password" type="password" placeholder="Contraseña" />
          <button type="submit">Crear Usuario</button>
        </form>
      </section>
  
      <!-- Sección para crear eventos -->
      <section>
        <h3>Crear Evento</h3>
        <form @submit.prevent="createEvent">
          <input v-model="newEvent.name" type="text" placeholder="Nombre del evento" />
          <input v-model="newEvent.date" type="date" />
          <button type="submit">Crear Evento</button>
        </form>
      </section>
  
      <!-- Más secciones para otras funcionalidades como subir entrenamientos -->
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const newUser = ref({ username: '', password: '' });
  const newEvent = ref({ name: '', date: '' });
  
  function createUser() {
    // Lógica para crear un usuario
    console.log('Crear usuario:', newUser.value);
  }
  
  function createEvent() {
    // Lógica para crear un evento
    console.log('Crear evento:', newEvent.value);
  }
  
  // Agrega funciones similares para editar usuarios, subir entrenamientos, etc.
  </script>
  
  <style scoped>
  /* Estilos para tu panel de administración */
  
  </style>