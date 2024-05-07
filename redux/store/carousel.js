import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../api/';

export const getCarousel = createAsyncThunk(
  'carousel/getCarousel',
  async () => {
    try {
      const response = await http.get(
        `${http.url}/get-carousel`,
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const slice = createSlice({
  name: 'carousel',
  initialState: [],
  reducers: {},

  extraReducers: builder => {
    builder.addCase(getCarousel.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
