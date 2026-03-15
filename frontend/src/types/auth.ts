export interface RegisterRequest {
  username: string
  password: string
}

export interface RegisterResponse {
  user_id: string
  username: string
}

export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  access_token: string
}
