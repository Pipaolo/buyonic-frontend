import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { landingReducer } from "../features/landing/landingSlice";
import { sideNavigationReducer } from "../features/sideNavigation/sideNavigationSlice";
import { signupReducer } from "../features/signup/signupSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import rootReducer from "./reducers";

/**
 * Setup Redux Persist
 */
const persistConfig = {
  key: "root",
  version: 1,
  blacklist: ["signup", "sideNavigation", "landing"],
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<String>
>;
