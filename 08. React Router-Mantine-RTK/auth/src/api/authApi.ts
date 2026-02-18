import axios from "axios";
import { tokenStorage } from "./helpers/tokenStorage";
import { JSON_HEADERS } from "./helpers/utils";

const request = async (url: string, body: unknown) => {
  const response = await axios.post(url, body, {
    headers: JSON_HEADERS,
  });

  return response.data;
};

const requestWithAuth = async (url: string) => {
  const accessToken = tokenStorage.getAccessToken();

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};

export const registerUser = async (input: {
  username: string;
  password: string;
}) => {
  return request("/api/auth/register", input);
};

export const loginUser = async (input: {
  username: string;
  password: string;
}) => {
  return request("/api/auth/login", input);
};

export const fetchCurrentUser = async () => {
  return requestWithAuth("/api/users/me");
};

export const fetchTasks = async () => {
  return requestWithAuth("/api/tasks");
};
