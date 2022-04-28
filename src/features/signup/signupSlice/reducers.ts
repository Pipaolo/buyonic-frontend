import { createReducer } from "@reduxjs/toolkit";
import { SignUpForm } from "../types";
import { signupStepSubmitted, signupStepUpdated } from "./actions";

export interface SignUpState {
  isLoading: boolean;
  success: boolean;
  step: number;
  totalSteps: number;
  form?: SignUpForm;
  error?: any;
}

const initialState: SignUpState = {
  isLoading: false,
  success: false,
  step: 1,
  totalSteps: 3,
  form: undefined,
  error: undefined,
};

const signupReducer = createReducer(initialState, (builder) => {
  builder.addCase(signupStepUpdated, (state, action) => {
    state.step = action.payload;
  });
  builder.addCase(signupStepSubmitted, (state, action) => {
    const { data, step } = action.payload;
    state.form = data;
    state.step = step;
  });
});

export default signupReducer;
