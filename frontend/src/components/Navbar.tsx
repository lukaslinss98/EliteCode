import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/auth'

function Navbar() {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          EliteCode
        </Typography>
        <div>
          {user ? (
            <>
              <Typography component="span" color="inherit" sx={{ mr: 2 }}>{user.username}</Typography>
              <Button variant="outlined" color="inherit" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <span className='flex gap-2'>
              <Button variant="outlined" color="inherit" onClick={() => navigate('/login')}>Login</Button>
              <Button variant="outlined" color="inherit" onClick={() => navigate('/register')}>Register</Button>
            </span>
          )}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
