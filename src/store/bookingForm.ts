import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface bookingFormState {
  fullName: string;
  phoneNUmber: string;
  ghanaCard: string;
  shippingFrom: string;
  shippingTo: string;
  sizeCategory?: string;
  dimensionHeight?: number;
  dimensionWidth?: number;
  dimensionLength?: number;
}

const initialBookingFormDataState: bookingFormState = {
  fullName: "",
  phoneNUmber: "",
  ghanaCard: "",
  shippingFrom: "",
  shippingTo: "",
  sizeCategory: "",
};

const bookingSlice = createSlice({
  name: "data",
  initialState: initialBookingFormDataState,
  reducers: {
    setBookingFormState: (state, action: PayloadAction<bookingFormState>) => {
      state = action.payload;
    },
  },
});

export default bookingSlice.reducer;

export const selectBookingForm = (state: RootState) => state.bookReducer;
