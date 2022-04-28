import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export const selectSignup = (state: RootState) => state.signup;
export const selectSignupSelector = createSelector(
  selectSignup,
  (state) => state
);
export const selectSignupFormSelector = createSelector(
  selectSignup,
  (state) => state.form
);
