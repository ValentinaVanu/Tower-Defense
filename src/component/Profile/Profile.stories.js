import React from "react";
import { Provider } from "react-redux";
import { AuthProvider } from "../../context/AuthContext";
import store from "../../store";
import { Profile } from "./Profile";

export default {
  title: "Components/Profile",
  component: Profile,
  argTypes: {
    userName:{
      control:{
        type:'text'
      }
    },
  }
};

export const Default = (args) => (
  <Provider store={store}>
    <AuthProvider>
      <Profile {...args} />
    </AuthProvider>
  </Provider>
);

Default.args = {
  userName: "User name",
};
Default.parameters = {
  layout: "fullscreen",
};
