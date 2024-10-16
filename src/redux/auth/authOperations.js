import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { setAuthToken } from "components/api/axios";

export const registerUser = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/users/signup', userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const loginUser = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/users/login', userData);
    const { token } = response.data;
    setAuthToken(token);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await axiosInstance.post('/users/logout');
    setAuthToken(null);
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});