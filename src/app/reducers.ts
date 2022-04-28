import { combineReducers } from "@reduxjs/toolkit";
import { landingReducer } from "../features/landing/landingSlice";
import { sideNavigationReducer } from "../features/sideNavigation/sideNavigationSlice";
import { signupReducer } from "../features/signup/signupSlice";

const rootReducer = combineReducers({
  sideNavigation: sideNavigationReducer,
  landing: landingReducer,
  signup: signupReducer,
});

export default rootReducer;
