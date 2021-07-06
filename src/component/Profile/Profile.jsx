import React, { useState } from 'react'
import { useAuth } from '../Context/auth-context';
import { navigate } from '@reach/router';
import { Button, Typography } from '@material-ui/core';
import { StyledPaper } from '../LogIn/LogIn.style'
import { useEffect } from 'react';

const Profile = () => {
  const { currentUser , logout} = useAuth();
  const [error, setError] = useState('')

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate('/')
    } catch {
      setError("Failed to log out")
    }
  }


  return (
    <StyledPaper>
      <Typography variant="h2">Profile</Typography>
      {currentUser && <Typography varinat="h4">Email: {currentUser.email}</Typography>}
      <Button variant="outlined" color="primary" onClick={handleLogout}>Log Out</Button>
      {error && <Typography varinat="body1">{error}</Typography>}
    </StyledPaper>
  )
}

export { Profile }
