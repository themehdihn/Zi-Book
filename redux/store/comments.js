import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../api/';

export const getComment = createAsyncThunk(
  'comments/getComment',
  async bookId => {
    try {
      const response = await http.get(`${http.url}/comment/${bookId}`);
      // console.log('comment data', response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const getRate = createAsyncThunk('comments/getRate', async bookId => {
  try {
    const response = await http.get(`${http.url}/averageRating/${bookId}`);
    // console.log("rateee",response.data)
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const createComment = createAsyncThunk(
  'comments/createComment',
  async data => {
    try {
      const response = await http.post(`${http.url}/comment`, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const slice = createSlice({
  name: 'comments',
  initialState: {
    commentList: [],
    rate: [],
    isRefetching: true,
  },
  reducers: {
    unrefetch(state) {
      state.isRefetching = true;
    },
  },

  extraReducers: builder => {
    builder.addCase(getComment.fulfilled, (state, action) => {
      state.commentList = action.payload;
    });
    builder.addCase(getRate.fulfilled, (state, action) => {
      state.rate = action.payload;
    });
    builder.addCase(createComment.fulfilled, (state, action) => {
      state.isRefetching = false;
    });
  },
});

export const {unrefetch} = slice.actions;

export default slice.reducer;
