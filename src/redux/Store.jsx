import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import StagiaireReducer from "./StagiaireSlice";
export const Store = configureStore({
  reducer: {
    stagiaires: StagiaireReducer,
  },
});

export default Store;
