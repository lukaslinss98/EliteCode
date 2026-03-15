import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { register as registerUser } from '../api/auth'
import type { RegisterRequest } from '../types/auth'

function Register() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<RegisterRequest>()

  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      navigate('/login')
    },
  })

  return (
    <Container maxWidth="xs">
      <Box component="form" onSubmit={handleSubmit((data) => mutate(data))} sx={{ mt: 8, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h5">Register</Typography>
        <TextField label="Username" {...register('username')} fullWidth />
        <TextField label="Password" type="password" {...register('password')} fullWidth />
        <Button type="submit" variant="contained" loading={isPending} fullWidth>Register</Button>
        <Button variant="text" onClick={() => navigate('/login')} fullWidth>Already have an account? Login</Button>
      </Box>
    </Container>
  )
}

export default Register
