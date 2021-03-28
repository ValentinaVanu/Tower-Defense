import React from 'react';
import { Router } from '@reach/router';
import { Background } from '../background/background.component';
import { Home } from '../home';
import { LogIn } from '../login';
import { Menu } from '../menu'
import { StyledAppWrapper } from './app.style';

const App = () => {
  return (
    <StyledAppWrapper>
      <Background>
        <Menu />
        <Router>
          <Home path="/"/>
          <LogIn path="/login"/>
        </Router>
      </Background>
    </StyledAppWrapper>
  )
}

export { App }