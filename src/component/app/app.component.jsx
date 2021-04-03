import React from 'react';
import { Router } from '@reach/router';
import { Background } from '../background/background.component';
import { Home } from '../home';
import { LogIn } from '../login';
import { Menu } from '../menu'
import { StyledAppWrapper } from './app.style';
import { Play } from '../play';

const App = () => {
  return (
    <StyledAppWrapper>
      <Menu />
      <Router>
        {/* <Background> */}
          <Home path="/"/>
          <LogIn path="/login"/>
        {/* </Background> */}
        <Play path="/play"/>
      </Router>
    </StyledAppWrapper>
  )
}

export { App }