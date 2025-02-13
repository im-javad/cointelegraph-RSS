import { NewsItemType, NewsStateType } from "@/types/newsType";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState: NewsStateType = {
  news: [],
  status: "idle",
  error: null,
};

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const res = await fetch("/api/news");
  if (!res.ok) {
    throw new Error("Failed fetching!");
  }
  return (await res.json()) as NewsItemType[];
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews: (state, action: PayloadAction<Omit<NewsItemType, "id">>) => {
      state.status = "loading";
      state.news.push({ ...action.payload, id: crypto.randomUUID() });
      state.status = "succeeded";
    },
    editNews: (state, action: PayloadAction<NewsItemType>) => {
      const index = state.news.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.news[index] = action.payload;
      }
    },
    deleteNews: (state, action: PayloadAction<string>) => {
      state.news = state.news.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchNews.fulfilled,
        (state, action: PayloadAction<NewsItemType[]>) => {
          state.status = "succeeded";
          state.news = action.payload;
        }
      )
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong bro!";
      });
  },
});

export const { addNews, editNews, deleteNews } = newsSlice.actions;
export const selectNews = (state: RootState) => state.news;
export default newsSlice.reducer;
