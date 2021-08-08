import React from "react";
import { Provider } from "react-redux";
import { AuthProvider } from "../../context/AuthContext";
import store from "../../store";
import { SliderMenu } from "./SliderMenu";

export default {
  title: "Components/SliderMenu",
  component: SliderMenu,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  argsType: {
    show: {
      control: {
        type: 'radio',
      }
    }
  }
};

export const Default = (args) => (
    <AuthProvider>
      <SliderMenu {...args} />
    </AuthProvider>
);

Default.args = {
  show: true,
};
Default.paramenters = {
  layout: "fullscreen",
};
