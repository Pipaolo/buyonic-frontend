import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LandingSubscriptionForm } from "../types";

export const subscriptionSubmitted = createAsyncThunk(
  "landing/landingSubscriptionSubmitted",
  async (payload: LandingSubscriptionForm) => {
    const form = new FormData();
    form.append("name", payload.name);
    form.append("_replyto", payload.email);
    form.append("message", "SUBSCRIPTION");
    form.append("_subject", "Buyonic Subscription Form Submission");
    await axios.post("https://formspree.io/f/mayvpzbr", form);
  }
);
export const startSellingNowPressed = createAsyncThunk(
  "landing/startSellingNowPressed",
  async (_) => {
    await new Promise((res, rej) => {
      setTimeout(() => {
        res(null);
      }, 1000);
    });
  }
);
