import { useAuthStore } from '../store/auth'

export async function authFetch(input: string, init: RequestInit = {}): Promise<Response> {
  const token = useAuthStore.getState().token
  return fetch(input, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...init.headers,
    },
  })
}
