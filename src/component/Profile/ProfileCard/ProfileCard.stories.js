import React from "react";
import { AuthProvider } from "../../../context/AuthContext";
import { ProfileCard } from "./index";

export default {
  title: "Components/Profile/ProfileCard",
  component: ProfileCard,
};

const Template = (args) => <AuthProvider><ProfileCard {...args} /></AuthProvider>;

export const Card = Template.bind({});

Card.parameters = {
  layout: "fullscreen",
};
