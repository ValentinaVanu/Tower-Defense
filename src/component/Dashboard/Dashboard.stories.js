import React from "react";
import { Provider } from "react-redux";
import { AuthProvider } from "../../context/AuthContext";
import store from "../../store";
import { Dashboard } from "./Dashboard";

export default {
  title: "Components/Dashboard",
  component: Dashboard,
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
      <Dashboard {...args} />
    </AuthProvider>
  </Provider>
);

Default.args = {
  userName: "User name",
};
Default.parameters = {
  layout: "fullscreen",
};
