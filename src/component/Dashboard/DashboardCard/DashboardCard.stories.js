import React from "react";
import { AuthProvider } from "../../../context/AuthContext";
import { DashboardCard } from "./index";

export default {
  title: "Components/Dashboard/DashboardCard",
  component: DashboardCard,
};

const Template = (args) => <AuthProvider><DashboardCard {...args} /></AuthProvider>;

export const Card = Template.bind({});

Card.parameters = {
  layout: "fullscreen",
};
