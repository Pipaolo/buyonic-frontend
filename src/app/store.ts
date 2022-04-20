import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { landingReducer } from "../features/landing/landingSlice";
import { sideNavigationReducer } from "../features/sideNavigation/sideNavigationSlice";

export const store = configureStore({
  reducer: {
    sideNavigation: sideNavigationReducer,
    landing: landingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<String>
>;
