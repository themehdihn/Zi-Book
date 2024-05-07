import {createSlice, createAsyncThunk, combineReducers} from '@reduxjs/toolkit';
import http from '../../api/';

export const getAllCategories = createAsyncThunk(
  'categories/getAllCategories',
  async () => {
    try {
      const response = await http.get(`${http.url}/get-category`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const slice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {},

  extraReducers: builder => {
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      return action.payload;
    });
   
  },
});


export default slice.reducer;

