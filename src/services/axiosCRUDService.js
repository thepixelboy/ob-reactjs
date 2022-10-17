import axios from "axios";

/**
 * Login method to ReqRes endpoint
 * @param {string} email
 * @param {string} password
 */
export const login = (email, password) => {
  return axios.post("https://reqres.in/api/login", {
    email,
    password,
  });
};

// TODO: Get all users
export const getAllUsers = () => {
  return axios.get("https://reqres.in/api/users");
};

// TODO: Get all users paginated
export const getAllUsersPaginated = (page) => {
  return axios.get(`https://reqres.in/api/users?page=${page}`);
};
// TODO: Get a single user by ID
export const getUserById = (id) => {
  return axios.get(`https://reqres.in/api/users/${id}`);
};
// TODO: Create a user
export const createUser = (name, job) => {
  return axios.post("https://reqres.in/api/users", {
    name,
    job,
  });
};
// TODO: Update a user
export const updateUser = (id, name, job) => {
  return axios.put(`https://reqres.in/api/users/${id}`, {
    name,
    job,
  });
};
// TODO: Delete a user
export const deleteUser = (id) => {
  return axios.delete(`https://reqres.in/api/users/${id}`);
};
