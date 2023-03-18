import { createSlice } from "@reduxjs/toolkit";
import { resetDestination } from "./destinationSlice";
import { resetReduxOpedia } from "../action/action";
const initialState = { count: 10 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    incremenent: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    decrementMultiplier: (state, actions) => {
      state.count -= actions.payload;
    },
    incremenentMultiplier: (state, actions) => {
      state.count += Number(actions.payload);
    },
    // resetCounter: (state) => {
    //   state.count = 0;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxOpedia, (state) => {
      state.count = 10;
    });
  },
});

export const {
  incremenent,
  decrement,
  decrementMultiplier,
  incremenentMultiplier,
  // resetCounter,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
