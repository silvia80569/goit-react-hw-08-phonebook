import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";


export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get('/contacts');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const addContact = createAsyncThunk('contacts/add', async (contactData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/contacts', contactData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const deleteContact = createAsyncThunk('contacts/delete', async (contactId, { rejectWithValue }) => {
  try {
    await axiosInstance.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});