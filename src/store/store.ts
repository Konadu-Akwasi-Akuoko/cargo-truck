import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import bookingReducer from "./bookingForm";

export const store = configureStore({
  reducer: {
    userReducer,
    bookReducer: bookingReducer,
  },
});

// export a type named RootState that represents the state of the store
export type RootState = ReturnType<typeof store.getState>;

// export a type named AppDispatch that represents the dispatch function of the store
export type AppDispatch = typeof store.dispatch;
