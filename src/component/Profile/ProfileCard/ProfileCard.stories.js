import React from 'react'
import { ProfileCard } from './index'

export default {
  title: 'Components/Profile/ProfileCard',
  component: ProfileCard,
}

const Template = (args) => <ProfileCard {...args}/>

export const Card = Template.bind({})

Card.parameters = {
  layout: 'fullscreen',
}
