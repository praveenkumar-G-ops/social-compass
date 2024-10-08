import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_AUTH__ENDPOINTS } from "../../api/user.api.js";
import axios from '../../axios.js';


const handleApi = async (method, url, data = null) => {
  const options = { method, url };
  if (data) options.data = data;

  const response = await axios(options, { withCredentials: true });
  return response.data;
};

export const registerUser = createAsyncThunk("registerUser", async (data, { rejectWithValue }) => {
  try {
    console.log(data);
    return await handleApi("POST", API_AUTH__ENDPOINTS.register_user, data);
  } catch (error) {
    // if (axios.isAxiosError(error)) {

    //   return rejectWithValue({
    //     message: error.message,
    //     code: error.code,
    //     response: error.response ? error.response.data : null,
    //   });
    // }

    return rejectWithValue(error);
  }
});

export const loginUser = createAsyncThunk("loginUser", async (data, { rejectWithValue }) => {
  try {
    console.log(data);
    return await handleApi("POST", API_AUTH__ENDPOINTS.login_user, data);
  } catch (error) {
    return rejectWithValue(error);
  }
});




export const getUserProfile = createAsyncThunk("getUserProfile", async (data, { rejectWithValue }) => {
  try {
    return await handleApi("GET", API_AUTH__ENDPOINTS.user_profile);
  } catch (error) {
    return rejectWithValue(error);
  }
});


const handleAsyncActions = (builder, action, stateUpdater) => {
  builder
    .addCase(action.pending, (state) => {
      state.loading = true;
    })
    .addCase(action.fulfilled, (state, { payload }) => {
      state.loading = false;
      stateUpdater(state, payload);
    })
    .addCase(action.rejected, (state, { payload }) => {
      state.loading = false;
      state.err = payload;
    });
};


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loading: false,
    err: null,
    profile: null,
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    logoutUser: (state) => {
      state.username = 'Guest';
    }
  },
  extraReducers: (builder) => {
    handleAsyncActions(builder, registerUser, (state, payload) => {
      state.users.push(payload);
    });
    handleAsyncActions(builder, getUserProfile, (state, payload) => {
      state.profile = payload;
    });
    handleAsyncActions(builder, loginUser, (state, payload) => {
      state.profile = payload;
    });
  }
});

export const { setUsername, logoutUser } = userSlice.actions;
export default userSlice.reducer;
