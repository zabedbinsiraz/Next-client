import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../app/type";

// ********* SITUATION STORE  *********
const initialState: any = {
  allExamples: [],
};

export const examplesSlice = createSlice({
  name: "allExamples",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setAllExamples: (state, action: PayloadAction<any>) => {
      state.allExamples = action.payload;
    },
  },
});

export const { setAllExamples } = examplesSlice.actions;
export const selectExamples = (state: AppState) => state.allExamples;

export default examplesSlice.reducer;
