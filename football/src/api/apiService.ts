import axios, { AxiosInstance } from 'axios';
import { NewUser, User } from '../interfaces/user'; // Suponiendo que has movido las interfaces a su propio archivo

// Utiliza variables de entorno para la configuración
const API_BASE_URL = 'http://localhost:3000/api/v1/';

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    // Aquí puedes manejar errores específicos de la API o errores de red
    // .Por ejemplo, puedes re-lanzar el error con un mensaje personalizado
    throw new Error(error.response?.data?.message || 'Error de comunicación con la API');
  }
);

export const userService = {
    async registerUser(newUser: NewUser): Promise<User> {
        try {
          const response = await apiClient.post('/users', newUser);
          return response.data;
        } catch (error) {
          throw error;
        }
      },
    
      // Método para obtener la lista de usuarios
      async getUsers(): Promise<User[]> {
        try {
          const response = await apiClient.get('/users');
          return response.data;
        } catch (error) {
          throw error;
        }
      },
    
      // Método para obtener un usuario específico por ID
      async getUserById(userId: string): Promise<User> {
        try {
          const response = await apiClient.get(`/users/${userId}`);
          return response.data;
        } catch (error) {
          throw error;
        }
      },
    
      // Método para actualizar un usuario existente
      async updateUser(userId: string, userData: Partial<NewUser>): Promise<User> {
        try {
          const response = await apiClient.put(`/users/${userId}`, userData);
          return response.data;
        } catch (error) {
          throw error;
        }
      },
    
      // Método para eliminar un usuario
      async deleteUser(userId: string) {
        try {
          const response = await apiClient.delete(`/users/${userId}`);
          return response.data;
        } catch (error) {
          throw error;
        }
      },
    };