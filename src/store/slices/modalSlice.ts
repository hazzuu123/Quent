import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IModalState {
  isOpen: boolean;
}

const initialState: IModalState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpen = payload;
    },
  },
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
