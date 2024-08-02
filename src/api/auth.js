import axios from "axios";

const apiRoute = "https://nodejs-20240519.vercel.app";

// asynchronous function
const login = async ({ email, password }) => {
  const response = await axios.post(`${apiRoute}/api/auth/login`, {
    email,
    password,
  });

  return response;
};

async function signUp({ name, email, password, confirmPassword }) {
  const response = await axios.post(`${apiRoute}/api/auth/register`, {
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
