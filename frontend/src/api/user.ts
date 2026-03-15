import { authFetch } from './client'
import type { UserResponse } from '../types/user'

export async function getMe(): Promise<UserResponse> {
  const res = await authFetch('/api/user/me')
  if (!res.ok) throw new Error('Failed to fetch user')
  return res.json()
}
