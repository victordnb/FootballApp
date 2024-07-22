const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  birthYear: {
    type: String,
    required: true,
    trim: true,
  },
  position: {
    type: String,
    required: true,
    trim: true,
  },
  cardNumber: {
    type: String,
    required: false, // Marcado como opcional
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  nationality: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true, // Esto agregará automáticamente los campos createdAt y updatedAt
});

// El campo 'id' no se incluye explícitamente aquí porque Mongoose automáticamente
// añade un campo '_id' que sirve como identificador único para cada documento.
// .Puedes acceder a este campo como 'id' en tu aplicación si es necesario.

const User = mongoose.model('User', userSchema);

module.exports = User;