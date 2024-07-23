<template>
    <div class="card">
      <DataTable v-model:editingRows="editingRows" :value="products" editMode="row" dataKey="id" @row-edit-save="onRowEditSave"
        :pt="{
            table: { style: 'min-width: 50rem' },
            column: {
                bodycell: ({ state }) => ({
                    style:  state['d_editing']&&'padding-top: 0.75rem; padding-bottom: 0.75rem'
                })
            }
        }"
      >
        <Column field="code" header="Code" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]" fluid />
          </template>
        </Column>
        <Column field="name" header="Name" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]" fluid />
          </template>
        </Column>
        <Column field="inventoryStatus" header="Status" style="width: 20%">
          <template #editor="{ data, field }">
            <Select v-model="data[field]" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status" fluid>
              <template #option="slotProps">
                <Tag :value="slotProps.option.value" :severity="getStatusLabel(slotProps.option.value)" />
              </template>
            </Select>
          </template>
          <template #body="slotProps">
            <Tag :value="slotProps.data.inventoryStatus" :severity="getStatusLabel(slotProps.data.inventoryStatus)" />
          </template>
        </Column>
        <Column field="price" header="Price" style="width: 20%">
          <template #body="{ data, field }">
            {{ formatCurrency(data[field]) }}
          </template>
          <template #editor="{ data, field }">
            <InputNumber v-model="data[field]" mode="currency" currency="USD" locale="en-US" fluid />
          </template>
        </Column>
        <Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
      </DataTable>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';
import { useUsers } from '@/composables/useUsers';

// Utilizando el composable useUsers para gestionar los datos de usuario
const {
  users,
  isLoading,
  error,
  fetchUsers,
  createUser: createNewUser,
  updateUser: updateUserFromComposable,
  deleteUser,
} = useUsers();

const usersData = ref([]);

const newUser = ref({
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  birthYear: "",
  position: "",
  cardNumber: "", // Opcional
  phoneNumber: "",
  nationality: "",
});

const newEvent = ref({
  name: "",
  date: "",
  time: "",
  location: "",
  description: "",
  result: "", // Después de un partido
});

// Cargar usuarios al montar el componente
onMounted(async () => {
  await fetchUsers();
  usersData.value = users.value;
});

// Actualizar la lógica de guardado de edición de fila para utilizar updateUserFromComposable
const onRowEditSave = (event) => {
  let { newData, index } = event;
  // Aquí deberías adaptar la lógica para actualizar el usuario mediante updateUserFromComposable
  // Esto es solo un ejemplo, necesitarás ajustar según tu implementación específica
  updateUserFromComposable(newData.id, newData);
};

// Asumiendo que necesitas una función para obtener etiquetas de estado o similar
// Ajusta según tus necesidades
const getStatusLabel = (status) => {
  // Tu lógica aquí
};
</script>