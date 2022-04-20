import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export const selectLanding = (state: RootState) => state.landing;

export const selectLandingSelector = createSelector(
  selectLanding,
  (state) => state
);
