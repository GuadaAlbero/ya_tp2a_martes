const users = [
  {
    id: 1,
    name: "canela",
  },
  {
    id: 2,
    name: "camilo",
  },
];

// Devuelve todos los usuarios
export const getAllUsersSevice = () => {
  return users;
};

// Busca un usuario por ID
export const getUserByIdSevice = (id) => {
  const user = users.find((u) => u.id == id);
  return user;
};

// Simula crear un usuario
export const createUserSevice = (data) => {
  return users;
};

// Simula actualizar un usuario
export const updateUserSevice = (data) => {
  return users;
};

// Simula eliminar un usuario
export const deleteUserSevice = (id) => {
  return users;
};
