import axios from "axios";

export const addAccessTokensToLocalStorage = (
  accessToken: string,
  isLoggedIn: string
) => {
  localStorage.setItem("isLoggedIn", isLoggedIn);
  localStorage.setItem("accessToken", accessToken);
};

export const addDefaultsToAxios = () => {
  const accessToken = localStorage.getItem("accessToken");
  axios.defaults.baseURL = "http://localhost:3001";
  if (accessToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }
};

export const clearLocalStorage = () => {
  delete axios.defaults.headers.common["Authorization"];
  localStorage.removeItem("accessToken");
  localStorage.setItem("isLoggedIn", "false");
};

export const isUserLoggedIn = () => {
  return JSON.parse(localStorage.getItem("isLoggedIn") as string);
};
