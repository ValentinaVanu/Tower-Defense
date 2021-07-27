import React from "react";
import { ProfileChart } from "./Chart";

export default {
  title: "Components/ProfileChart",
  component: ProfileChart,
};

export const Default = (args) => <ProfileChart {...args} />;

Default.args = {
  win: 12,
  loss: 4,
};
