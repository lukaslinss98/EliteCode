import type { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '../types/auth'

const BASE_URL = '/api/auth'

export async function login(data: LoginRequest): Promise<LoginResponse> {
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Invalid credentials')
  return res.json()
}

export async function register(data: RegisterRequest): Promise<RegisterResponse> {
  const res = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Registration failed')
  return res.json()
}
