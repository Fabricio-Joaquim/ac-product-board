import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserModel } from "../model/userModel";

const initialState: UserModel = {
  accessToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setAccessToken } = userSlice.actions;

export default userSlice.reducer;
