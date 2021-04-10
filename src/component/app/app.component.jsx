import React from 'react';
import store from '../../store';
// import { Background } from '../background/background.component';
import { Home } from '../home';
import { LogIn } from '../login';
import { Menu } from '../menu'
import { StyledAppWrapper, StyledRouter } from './app.style';
import { Play } from '../play';
import { Provider } from 'react-redux';
import { SignUp } from '../sign-up/sign-up.component';

const App = () => {
  return (
    <Provider store={store}>
      <StyledAppWrapper>
        {/* <Menu /> */}
        <StyledRouter>
          {/* <Background> */}
            <Home path="/"/>
            <LogIn path="/login"/>
            <SignUp path="/sign-up" />
          {/* </Background> */}
          <Play path="/play"/>
        </StyledRouter>
      </StyledAppWrapper>
    </Provider>
  )
}

export { App }