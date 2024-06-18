import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import http from '../../api/';

export const loginUser = createAsyncThunk('users/loginUser', async user => {
  try {
    const {data, status} = await http.post(
      `${http.url}/users/login`,
      JSON.stringify(user),
    );
    console.log('asdadsadad', data);
    await AsyncStorage.setItem('token', JSON.stringify(data.accessToken));
    await AsyncStorage.setItem('userId', JSON.stringify(data.userId));
    return status;
  } catch (err) {
    console.log(err);
  }
});

export const registerUser = createAsyncThunk(
  'users/registerUser',
  async user => {
    try {
      const {status} = await http.post(
        `${http.url}/users/appregister`,
        JSON.stringify(user),
      );
      console.log(status);
      return status;
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
    const token = await AsyncStorage.getItem('token');
    const res = await http.get(`${http.url}/users/profile`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
    await AsyncStorage.setItem('url', JSON.stringify(res.data.url));
    await AsyncStorage.setItem('name', JSON.stringify(res.data.name));
    await AsyncStorage.setItem('phone', JSON.stringify(res.data.phone));

    return res.data;
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
