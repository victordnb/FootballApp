// /interfaces/custom-jwt-payload.ts

import { JwtPayload } from "jsonwebtoken"; // Asegúrate de que esta importación coincide con la biblioteca que estás utilizando

export interface CustomJwtPayload extends JwtPayload {
  isAdmin?: boolean;
}