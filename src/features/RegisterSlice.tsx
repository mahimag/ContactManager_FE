import { createSlice } from "@reduxjs/toolkit";

export interface registrationState {
  username: string;
  password: string;
  isRegistered: boolean;
}

const initialState: registrationState = {
  username: "",
  password: "",
  isRegistered: false, //logic to check localStorage
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  //how state can be updated
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setRegistered: (state, action) => {
      state.isRegistered = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRegistered } = registrationSlice.actions;
export const { setUsername } = registrationSlice.actions;
export const { setPassword } = registrationSlice.actions;

export default registrationSlice.reducer;
