import { createSlice } from "@reduxjs/toolkit";

export interface contactState {
  firstname: string;
  lastname: string;
  number: string;
}

const initialState: contactState = {
  firstname: "",
  lastname: "",
  number: "",
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  //how state can be updated
  reducers: {
    setFirstName: (state, action) => {
      state.firstname = action.payload;
    },
    setLastName: (state, action) => {
      state.lastname = action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setNumber } = contactSlice.actions;

export default contactSlice.reducer;
