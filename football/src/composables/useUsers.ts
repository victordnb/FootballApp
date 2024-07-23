import { ref } from 'vue';
import { userService } from '../api/apiService'; // Asegúrate de que la ruta sea correcta
import { NewUser, User } from '../interfaces/user'; // Importa las interfaces necesarias

function useUsers(data?: any) {
  const users = ref([] as User[]);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchUsers = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const data = await userService.getUsers();
      return data;
    } catch (err: any) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  const handleErrorResponse = (err: any) => {
    error.value = err?.message || "Ocurrió un error desconocido";
  };

  const createUser = async (newUser: NewUser) => {
    try {
      const data: User = await userService.registerUser(newUser);
        return data;
    } catch (err: any) {
      handleErrorResponse(err);
    }
  };

  const updateUser = async (userId: string, userData: Partial<NewUser>) => {
    try {
      const data = await userService.updateUser(userId, userData);
      const index = users.value.findIndex((u: User) => u.id === userId);
      if (index !== -1) {
        users.value[index] = { ...users.value[index], ...data };
      }
    } catch (err: any) {
      handleErrorResponse(err);
    }
  };

  const deleteUser = async (userId: string) => {
    try {
      await userService.deleteUser(userId);
      users.value = users.value.filter((user) => user.id !== userId);
    } catch (err: any) {
      handleErrorResponse(err);
    }
  };

  return {
    users,
    isLoading,
    error,
    fetchUsers,
    createUser,
    updateUser,
    deleteUser,
  };
}

export default useUsers;