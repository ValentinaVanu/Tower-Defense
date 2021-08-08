import React from "react";
import { ProfileChart } from "./Chart";

export default {
  title: "Components/ProfileChart",
  component: ProfileChart,
  argTypes: {
    title: {
      controls: {
        type: 'text',
      }
    }
  }
};

export const Default = (args) => <ProfileChart {...args} />;

Default.args = {
  win: 12,
  loss: 4,
  title: 'Title Example'
};
