import { createReducer } from "@reduxjs/toolkit";
import { createRequire } from "module";
import { startSellingNowPressed, subscriptionSubmitted } from "./actions";

export interface LandingState {
  isLoading: boolean;
  success: boolean;
  scrollToForm: boolean;
  errorMessage?: string | null;
}

const initialState: LandingState = {
  isLoading: false,
  success: false,
  scrollToForm: false,
  errorMessage: null,
};

const landingReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(subscriptionSubmitted.pending, (state, action) => {
      state.isLoading = true;
      state.success = false;
      state.errorMessage = null;
    })
    .addCase(subscriptionSubmitted.fulfilled, (state, action) => {
      state.isLoading = false;
      state.success = true;
    })
    .addCase(subscriptionSubmitted.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });

  builder
    .addCase(startSellingNowPressed.pending, (state, action) => {
      state.scrollToForm = true;
    })
    .addCase(startSellingNowPressed.fulfilled, (state, action) => {
      state.scrollToForm = false;
    });
});

export default landingReducer;
