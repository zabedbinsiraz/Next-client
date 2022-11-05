import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../app/type";

// ********* SITUATION STORE  *********
const initialState: any = {
  anotherExamples: [],
};

export const anotherExamplesSlice = createSlice({
  name: "anotherExamples",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setAnotherExamples: (state, action: PayloadAction<any>) => {
      state.anotherExamples = action.payload;
    },
  },
});

export const { setAnotherExamples } = anotherExamplesSlice.actions;
export const selectExamples = (state: AppState) => state.anotherExamples;

export default anotherExamplesSlice.reducer;
