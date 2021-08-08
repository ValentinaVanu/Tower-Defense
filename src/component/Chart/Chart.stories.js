import React from "react";
import { DashboardChart } from "./Chart";

export default {
  title: "Components/ProfileChart",
  component: DashboardChart,
  argTypes: {
    title: {
      controls: {
        type: "text",
      },
    },
  },
};

export const Default = (args) => <DashboardChart {...args} />;

Default.args = {
  win: 12,
  loss: 4,
  title: "Title Example",
};
