import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserModel } from "../model/userModel";

const initialState: UserModel = {
  accessToken: "",
  sidebarActive: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setSidebar: (state, action: PayloadAction<boolean>) => {
      state.sidebarActive = action.payload;
    },
  },
});

export const { setAccessToken, setSidebar } = userSlice.actions;

export default userSlice.reducer;
