import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../api/';

export const getAllBooks = createAsyncThunk('books/getAllBooks', async () => {
  try {
    const response = await http.get(`${http.url}/book/lastbook`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getCatBook = createAsyncThunk('books/getCatBook', async (categoryId) => {
  try {
    const response = await http.get(`${http.url}/book/${categoryId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const slice = createSlice({
  name: 'books',
  initialState : {
    allBooks: [],
    catBooks: [],
  },
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.allBooks = action.payload;
      })
      .addCase(getCatBook.fulfilled, (state, action) => {
        state.catBooks = action.payload;
      });
  },
});

export default slice.reducer;
