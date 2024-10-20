import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { setAuthToken } from "../../api/axios";

// Funcția pentru înregistrare utilizator
export const registerUser = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/users/signup', userData);
    const { token } = response.data;
    localStorage.setItem('userToken', token)
    setAuthToken(token);
    return { user: response.data, token };
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Aici trebuie să fie și celelalte operațiuni cum ar fi loginUser, logoutUser
export const loginUser = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/users/login', userData);
    const { token } = response.data;
    localStorage.setItem('userToken', token);
    setAuthToken(token);
    return { user: response.data, token };
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await axiosInstance.post('/users/logout');
    localStorage.removeItem('userToken');
    setAuthToken(null);
    return;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
