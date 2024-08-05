import axios from "axios";
import config from "../config/config";

// asynchronous function
const login = async ({ email, password }) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, {
    email,
    password,
  });

  return response;
};

async function signUp({ name, email, password, confirmPassword }) {
  const response = await axios.post(`${config.apiUrl}/api/auth/register`, {
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
