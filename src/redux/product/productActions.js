import { createAsyncThunk } from "@reduxjs/toolkit";
import { getById, getList } from "../../api/product";

const getProductList = createAsyncThunk(
  "product/list",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getList();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const getProductById = createAsyncThunk(
  "product/id",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getById(id);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export { getProductList, getProductById };
