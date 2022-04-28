import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { SignUpForm } from "../types";

export const signupStepUpdated = createAction<number>("SIGNUP_STEP_UPDATED");

export const signupStepSubmitted = createAction<{
  step: number;
  data: SignUpForm;
}>("SIGNUP_STEP_SUBMITTED");

export const signupSubmitted = createAsyncThunk<void, SignUpForm>(
  "SIGNUP_SUBMITTED",
  async (payload, { getState }) => {
    const currentState = (getState() as RootState).signup;
    const form = {
      ...currentState.form,
      ...payload,
    };
    console.log(form);
  }
);
