<template>
  <div>
    <nav>
      <button @click="activeComponent = 'Calendar'">Calendario</button>
      <button @click="activeComponent = 'PlayerList'">Lista de Jugadores</button>
      <button @click="activeComponent = 'TrainingSection'">Sección de Entrenamiento</button>
      <button @click="activeComponent = 'RankingSystem'">Sistema de Clasificación</button>
    </nav>
    <div class="component-container">
      <component :is="activeComponent"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Calendar from '../components/Calendar.vue';
import PlayerList from '../components/PlayerList.vue';
import TrainingSection from '../components/TrainingSection.vue';
import RankingSystem from '../components/RankingSystem.vue';

const components: any = {
  Calendar,
  PlayerList,
  TrainingSection,
  RankingSystem
};

const activeComponent = ref('Calendar');
</script>

<style scoped>
/* Tus estilos existentes */
nav button {
  margin-right: 10px;
  padding: 5px 10px;
  cursor: pointer;
}

.component-container {
  margin-top: 20px;
}
</style>