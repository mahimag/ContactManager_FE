import { createSlice } from "@reduxjs/toolkit";

export interface loginState {
  isLoggedIn: boolean;
}

const initialState: loginState = {
  isLoggedIn: false, //logic to check localStorage
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  //how state can be updated
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
      console.log("testing 123 :", state.isLoggedIn);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedIn } = loginSlice.actions;

export default loginSlice.reducer;
