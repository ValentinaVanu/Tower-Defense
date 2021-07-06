import React from 'react'
import { PrettyStepper } from './'

export default {
  title: 'Components/PrettyStepper',
  component: PrettyStepper,
}

export const Default = (args) => <PrettyStepper {...args}/>

Default.args = {
  title: 'Title',
  subTitle: 'Sub Title'
}
