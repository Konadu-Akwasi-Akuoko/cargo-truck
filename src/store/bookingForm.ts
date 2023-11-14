import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Activity } from "lucide-react";

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
  shippingPrice: number;
}

const initialBookingFormDataState: bookingFormState = {
  fullName: "",
  phoneNUmber: "",
  ghanaCard: "",
  shippingFrom: "",
  shippingTo: "",
  sizeCategory: "",
  shippingPrice: 0,
};

const bookingSlice = createSlice({
  name: "bookingFormSlice",
  initialState: initialBookingFormDataState,
  reducers: {
    setBookingFormState: (state, action: PayloadAction<bookingFormState>) => {
      state = action.payload;
    },
    setShippingPrice: (state, action: PayloadAction<number>) => {
      state.shippingPrice = action.payload;
    },
  },
});

export const { setBookingFormState, setShippingPrice } = bookingSlice.actions;

export default bookingSlice.reducer;

export const selectBookingForm = (state: RootState) => state.bookReducer;

export const selectBookingRegionPrice = (state: RootState) =>  state.bookReducer.shippingPrice
