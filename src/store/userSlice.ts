import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface userState {
  isAuthenticated: boolean;
}

const initialJobsDataState: userState = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "data",
  initialState: initialJobsDataState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<userState>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export const { setIsAuthenticated } = userSlice.actions;

export default userSlice.reducer;

export const selectIsAuthenticated = (state: RootState) =>
  state.userReducer.isAuthenticated;
