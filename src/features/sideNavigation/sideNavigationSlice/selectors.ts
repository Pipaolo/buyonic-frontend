import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export const selectSideNavigation = (state: RootState) => state.sideNavigation;
export const sideNavigationSelector = createSelector(
  selectSideNavigation,
  (state) => state
);
