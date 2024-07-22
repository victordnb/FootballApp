<template>
  <div>
    <h2>Sistema de Ranking</h2>
    <!-- Sistema de ranking aquí -->
    <div v-for="category in categories" :key="category.id">
      <h3>{{ category.name }}</h3>
      <!-- Contenido específico de la categoría aquí, por ejemplo, una lista de jugadores o equipos -->
    </div>
  </div>
</template>

<script setup lang="ts">
// Importaciones necesarias, si las hay

const categories = [
  { id: 1, name: 'Goles' },
  { id: 2, name: 'Buenos Pases' },
  { id: 3, name: 'Asistencias' },
  { id: 4, name: 'Defensa' },
  { id: 5, name: 'Portero' },
  { id: 6, name: 'Faltas' },
  { id: 7, name: 'Tarjetas' },
  { id: 8, name: 'Penales' },
  
  // Agrega más categorías según sea necesario
];
</script>