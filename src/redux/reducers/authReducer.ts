//handle auth related actions
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserDetails {
  email?: string;
  user_name: string;
  access_token?: string;
  date : number
}

interface AuthDetails {
  user_details : UserDetails
}

const authReducers = createSlice({
  initialState: {
    user_details : {
      user_name: '',
    }
  } as AuthDetails,
  name: 'auth',
  reducers: {
    register: (state: AuthDetails, action: PayloadAction<UserDetails>) => {
      if ('access_token' in action.payload) {
        localStorage.setItem('access_token', JSON.stringify(action.payload.access_token));
      }
      state.user_details = {
        user_name :  action.payload.user_name,
        email :  action.payload?.email ?? "",
        date :  Date.now()
      };
    },
  },
});

export const { register } = authReducers.actions;
export default authReducers.reducer;
