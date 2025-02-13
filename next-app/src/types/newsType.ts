export interface NewsItemType {
  id: string;
  title: string;
  link: string;
  date: string;
  contentSnippet: string;
  image: string;
  creator: string;
}

type FetchStatus = "idle" | "loading" | "succeeded" | "failed";

export interface NewsStateType {
  news: NewsItemType[];
  status: FetchStatus;
  error: string | null;
}
