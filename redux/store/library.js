import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../api/';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserLibrary = createAsyncThunk(
  'library/getUserLibrary',
  async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const response = await http.get(`${http.url}/${userId}/library`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const addToLibrary = createAsyncThunk(
  'library/addToLibrary',
  async bookId => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const response = await http.post(`${http.url}/add-library`, {
        userId,
        bookId,
      });
      console.log(response.data, 'add book response');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const removeFromLibrary = createAsyncThunk(
  'library/removeFromLibrary',
  async bookId => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const response = await http.delete(
        `${http.url}/remove-library/${userId}/${bookId}`,
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const updateLibrary = createAsyncThunk(
  'library/updateLibrary',
  async data => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      console.log('store =>', data);
      const res = await http.put(
        `${http.url}/update-library/${userId}/${data.bookId}`,
        {
          userId,
          bookId: data.bookId,
          progress: data.progress,
          lastReadLocation: data.lastReadLocation,
        },
      );
      console.log('resss', res.data);
      return res.data;
    } catch (error) {}
  },
);

const slice = createSlice({
  name: 'library',
  initialState: {
    list: [],
    isRefetching: true,
  },
  reducers: {
    unrefetch(state) {
      state.isRefetching = false;
    },
  },

  extraReducers: builder => {
    builder.addCase(getUserLibrary.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(addToLibrary.fulfilled, (state, action) => {
      state.isRefetching = true;
    });
    builder.addCase(removeFromLibrary.fulfilled, (state, action) => {
      state.isRefetching = true;
    });
    builder.addCase(updateLibrary.fulfilled, (state, action) => {
      state.isRefetching = true;
    });
  },
});
export const {unrefetch} = slice.actions;

export default slice.reducer;
