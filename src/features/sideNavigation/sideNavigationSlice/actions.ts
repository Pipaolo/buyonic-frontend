import { createAction } from "@reduxjs/toolkit";

export const toggleSideNavigation = createAction<boolean>(
  "sideNavigation/toggleSideNavigation"
);
