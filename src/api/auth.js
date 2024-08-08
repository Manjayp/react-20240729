import api from "./api";

// asynchronous function
const login = async ({ email, password }) => {
  const response = await api.post(`/auth/login`, {
    email,
    password,
  });

  return response;
};

async function signUp({ name, email, password, confirmPassword }) {
  const response = await api.post(`/auth/register`, {
    name,
    email,
    password,
    confirmPassword,
  });

  return response;
}

export { login, signUp };

/**
 * CRUD Operations. Create, Read, Update, Delete
 * API Methods
 * GET: To fetch data
 * POST: To create data
 * PUT: To update data
 * DELETE: To delete data
 */
