//interfaz user:
interface NewUser {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    birthYear: string; // Asumiendo que el año de nacimiento se maneja como una cadena
    position: string;
    cardNumber?: string; // Marcado como opcional
    phoneNumber: string;
    nationality: string;
  }

interface User extends NewUser {
    id: string;
    createdAt: string;
    updatedAt: string;
}

    export { NewUser , User };