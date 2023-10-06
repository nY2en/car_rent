import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://651fde3c906e276284c3a5f9.mockapi.io/api/v1';

const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/rent');
      console.log(response);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const API = { fetchCars };

export default API;
