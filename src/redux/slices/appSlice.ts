import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getBlogsRequest,
  getSingleBlogRequest,
} from "../../lib/http/requests/blogs";

export const getBlogs = createAsyncThunk(
  "app/getBlogs",
  async (params: { tab: string; search: string }, thunkAPI) => {
    try {
      thunkAPI.dispatch(setHeaderLoading(true));
      const { data } = await getBlogsRequest(params);
      if (data.items && data.includes?.Asset)
        return { items: data.items, assets: data.includes.Asset };
      else if (data.items) return { items: data.items, assets: [] };
      else return { items: [], assets: [] };
    } catch (error) {
      console.log(error);
    } finally {
      thunkAPI.dispatch(setHeaderLoading(false));
    }
  }
);

export const getSingleBlog = createAsyncThunk(
  "app/getSingleBlog",
  async (params: { id: string }, thunkAPI) => {
    try {
      thunkAPI.dispatch(setHeaderLoading(true));
      const { data } = await getSingleBlogRequest(params);
      if (data.items && data.items.length === 1 && data.includes?.Asset)
        return { item: data.items[0], assets: data.includes.Asset };
      else if (data.items && data.items.length)
        return { item: data.items[0], assets: [] };
      else return { item: null, assets: [] };
    } catch (error) {
      console.log(error);
    } finally {
      thunkAPI.dispatch(setHeaderLoading(false));
    }
  }
);

export interface AppState {
  headerLoading: boolean;
  blogs: any[];
  assets: any[];
  selectedBlog: null | any;
  toast: {
    open: boolean;
    text: string;
    type: "success" | "error";
  };
}

const initialState: AppState = {
  headerLoading: false,
  blogs: [],
  assets: [],
  selectedBlog: null,
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
    setSelectedBlog: (state, action) => {
      state.selectedBlog = action.payload;
    },
    closeToast: (state) => {
      state.toast.open = false;
      state.toast.text = "";
    },
    setHeaderLoading: (state, action: PayloadAction<boolean>) => {
      state.headerLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload?.items || [];
      state.assets = action.payload?.assets || [];
    });
    builder.addCase(getSingleBlog.fulfilled, (state, action) => {
      state.selectedBlog = action.payload?.item || null;
      state.assets = action.payload?.assets || [];
    });
  },
});

// Action creators are generated for each case reducer function
export const { openToast, closeToast, setSelectedBlog, setHeaderLoading } =
  appSlice.actions;

export default appSlice.reducer;
