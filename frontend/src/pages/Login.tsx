import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { login } from '../api/auth'
import { getMe } from '../api/user'
import { useAuthStore } from '../store/auth'
import type { LoginRequest } from '../types/auth'

function Login() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<LoginRequest>()
  const { setToken, setUser } = useAuthStore()

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: async (res) => {
      setToken(res.access_token)
      const user = await getMe()
      setUser(user)
      navigate('/')
    },
  })

  return (
    <Container maxWidth="xs">
      <Box component="form" onSubmit={handleSubmit((data) => mutate(data))} sx={{ mt: 8, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h5">Login</Typography>
        <TextField label="Username" {...register('username')} fullWidth />
        <TextField label="Password" type="password" {...register('password')} fullWidth />
        <Button type="submit" variant="contained" loading={isPending} fullWidth>Login</Button>
        <Button variant="text" onClick={() => navigate('/register')} fullWidth>Don't have an account? Register</Button>
      </Box>
    </Container>
  )
}

export default Login
