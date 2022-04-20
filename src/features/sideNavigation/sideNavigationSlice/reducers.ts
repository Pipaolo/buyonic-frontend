import { createReducer } from "@reduxjs/toolkit";
import { toggleSideNavigation } from "./actions";

export interface SideNavigationState {
  isVisible: boolean;
}

const initialState: SideNavigationState = {
  isVisible: true,
};

const sideNavigationReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleSideNavigation, (state, action) => {
    state.isVisible = action.payload;
  });
});

export default sideNavigationReducer;
