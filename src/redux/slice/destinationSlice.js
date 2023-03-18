import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOpedia } from "../action/action";
const initialState = () => {
  return {
    destination: [
      {
        name: "Hong Kong",
        days: 7,
        fact: "World's longest covered escalator",
      },
      {
        name: "Japan",
        days: 10,
        fact: "Japan is mostly mountains",
      },
      {
        name: "New Zealand",
        days: 14,
        fact: "Last country of the world to inhabited by humans",
      },
    ],
    destinationSelected: null,
  };
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {
    destinationClicked: (state, action) => {
      state.destinationSelected = action.payload;
      console.log(action);
    },
    resetDestination: (state) => {
      state.destinationSelected = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxOpedia, (state) => {
      state.destinationSelected = null;
    });
  },
});
export const { destinationClicked, resetDestination } =
  destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;
