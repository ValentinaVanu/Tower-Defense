import React from 'react';
import store from '../../store';
import { Router } from '@reach/router';
import { Background } from '../background/background.component';
import { Home } from '../home';
import { LogIn } from '../login';
import { Menu } from '../menu'
import { StyledAppWrapper } from './app.style';
import { Play } from '../play';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export { App }