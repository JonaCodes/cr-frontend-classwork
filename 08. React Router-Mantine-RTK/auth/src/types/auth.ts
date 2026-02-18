export interface AuthUser {
  id: string;
  username: string;
}

export interface LoginResponse {
  message: string;
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
}

export interface RegisterResponse {
  message: string;
  user: AuthUser;
}

export interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
}

export interface TasksResponse {
  tasks: {
    id: string;
    title: string;
    status: "todo" | "in-progress" | "done";
    ownerId: string;
  }[];
}

export interface MeResponse {
  user: AuthUser;
}
