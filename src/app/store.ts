import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { sideNavigationReducer } from "../features/sideNavigation/sideNavigationSlice";

export const store = configureStore({
  reducer: {
    sideNavigation: sideNavigationReducer,
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
