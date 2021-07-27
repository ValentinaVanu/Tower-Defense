import React from 'react'
import { AuthProvider } from '../Context/AuthContext'
import { Profile } from './Profile'

export default {
  title: 'Components/Profile',
  component: Profile,

}

export const Default = (args) => <AuthProvider><Profile {...args}/></AuthProvider>

Default.args = {
  currentUser: 'User name',
}
Default.parameters = {
  layout: 'fullscreen',
}
