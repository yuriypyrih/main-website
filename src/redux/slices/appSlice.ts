import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// export const updateWearable = createAsyncThunk(
//   'app/updateWearable',
//   async (params: { userId: string; provider: string }) => {
//     try {
//       await putWearableRequest(params.userId, params.provider);
//     } catch (error) {
//       console.log(error);
//     }
//   },
// );

export interface AppState {
  headerLoading: boolean;
  toast: {
    open: boolean;
    text: string;
    type: "success" | "error";
  };
}

const initialState: AppState = {
  headerLoading: false,
  toast: {
    open: false,
    text: "",
    type: "success",
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openToast: (
      state,
      action: PayloadAction<{ text: string; type?: "success" | "error" }>
    ) => {
      state.toast.open = true;
      state.toast.text = action.payload.text;
      state.toast.type = action.payload.type || "success";
    },
    closeToast: (state) => {
      state.toast.open = false;
      state.toast.text = "";
    },
    setHeaderLoading: (state, action: PayloadAction<boolean>) => {
      state.headerLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openToast, closeToast, setHeaderLoading } = appSlice.actions;

export default appSlice.reducer;
