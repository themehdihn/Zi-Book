import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import http, {getToken} from '../../api/';

export const loginUser = createAsyncThunk('users/loginUser', async user => {
  try {
    const {data, status} = await http.post(
      `${http.url}/users/login`,
      JSON.stringify(user),
    );
    console.log('asdadsadad', data);
    if (data.error) {
      console.log(data.error);
    } else {
      await AsyncStorage.setItem('token', JSON.stringify(data.accessToken));
      await AsyncStorage.setItem('userId', JSON.stringify(data.userId));
      await AsyncStorage.setItem('name', JSON.stringify(data.name));
      await AsyncStorage.setItem('phone', JSON.stringify(data.phone));
      await AsyncStorage.setItem('url', JSON.stringify(data.url));
    }
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const registerUser = createAsyncThunk(
  'users/registerUser',
  async inputs => {
    try {
      const res = await http.post(`${http.url}/users/register`, inputs, {});
      if (res.data.error) {
        console.log(res.data.error);
      } else {
        console.log('success register');
      }
    } catch (error) {
      console.log(error.message);
    }
  },
);

export const Logout = createAsyncThunk('users/Logout', async () => {
  try {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('userId');
  } catch (error) {
    console.log(error);
  }
});

export const Profile = createAsyncThunk('users/Profile', async () => {
  try {
    const userId = await AsyncStorage.getItem('userId');
    const token = await AsyncStorage.getItem('token');
    const res = await http.get(`${http.url}/users/profile`, {});
    console.log('profile', res.data);
  } catch (error) {
    console.log(error);
  }
});

const slice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},

  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(Logout.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(Profile.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
