<template>
    <div class="admin-panel">
      <h2>Panel de Administración</h2>
      <!-- Sección para crear usuarios -->
      <section>
      <h3>Crear Usuario</h3>
      <form @submit.prevent="createUser">
        <input v-model="newUser.username" type="text" placeholder="Nombre de usuario" />
        <input v-model="newUser.password" type="password" placeholder="Contraseña" />
        <input v-model="newUser.firstName" type="text" placeholder="Nombre" />
        <input v-model="newUser.lastName" type="text" placeholder="Apellidos" />
        <input v-model="newUser.birthYear" type="number" placeholder="Año de nacimiento" />
        <input v-model="newUser.position" type="text" placeholder="Posición" />
        <input v-model="newUser.cardNumber" type="text" placeholder="Número de ficha (Opcional)" />
        <input v-model="newUser.phoneNumber" type="tel" placeholder="Número de teléfono de contacto" />
        <input v-model="newUser.nationality" type="text" placeholder="Nacionalidad" />
        <button type="submit">Crear Usuario</button>
      </form>
    </section>
  
      <!-- Sección para crear eventos -->
      <section>
        <h3>Crear Evento</h3>
        <form @submit.prevent="createEvent">
          <input v-model="newEvent.name" type="text" placeholder="Nombre del evento" />
          <input v-model="newEvent.location" type="text" placeholder="Ubicación" />
          <input v-model="newEvent.time" type="time" />
          <input v-model="newEvent.date" type="date" />
          <input v-model="newEvent.description" type="text" placeholder="Descripción" />
          <input v-model="newEvent.result" type="text" placeholder="Resultado" />

          <button type="submit">Crear Evento</button>
        </form>
      </section>
  
      <!-- Más secciones para otras funcionalidades como subir entrenamientos -->
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import useUsers from '@/composables/useUsers';

  const { users, isLoading, error, fetchUsers, createUser: createNewUser, updateUser, deleteUser } = useUsers();
  
  const newUser = ref({
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  birthYear: '',
  position: '',
  cardNumber: '', // Opcional
  phoneNumber: '',
  nationality: ''
});

  const newEvent = ref({ 
    name: '',
     date: '',
     time: '',
     location: '',
     description: '',
     result: '' //despues de un partido
  });
  
  async function createUser() {
    //usar la funcion del composable y retornar el resultado:
    const result = await createNewUser(newUser.value);
    if (result) {
      console.log('Usuario creado:', newUser.value);

      // Limpiar los campos del formulario
      newUser.value = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        birthYear: '',
        position: '',
        cardNumber: '',
        phoneNumber: '',
        nationality: ''
      }
    }else {
      console.error('Error al crear usuario:', newUser.value);
    }

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