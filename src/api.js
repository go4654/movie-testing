import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "127c866ecb9630df124cbd4e2522af1c",
    language: "ko-KR",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  detail: (id) => api.get(`movie/${id}`),
  video: (id) => api.get(`movie/${id}/videos`),
  search: (term) =>
    api.get(`/search/movie`, {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
