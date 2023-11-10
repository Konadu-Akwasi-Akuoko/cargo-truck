import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { stat } from "fs";

export interface userState {
  isAuthenticated: boolean;
  emailAddress: string;
  name: string;
  userId: string;
}

const initialJobsDataState: userState = {
  isAuthenticated: false,
  emailAddress: "",
  name: "",
  userId: "",
};

const userSlice = createSlice({
  name: "data",
  initialState: initialJobsDataState,
  reducers: {
    setIsAuthenticated: (
      state,
      action: PayloadAction<Pick<userState, "isAuthenticated">>
    ) => {
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    setUserDetails: (
      state,
      action: PayloadAction<Pick<userState, "emailAddress" | "name" | "userId">>
    ) => {
      state.emailAddress = action.payload.emailAddress;
      state.name = action.payload.name;
      state.userId = action.payload.userId;
    },
  },
});

export const { setIsAuthenticated } = userSlice.actions;

export default userSlice.reducer;

export const selectIsAuthenticated = (state: RootState) =>
  state.userReducer.isAuthenticated;
