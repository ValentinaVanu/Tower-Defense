import React from 'react'
import { PrettyAccordion } from './Accordion'

export default {
  title: 'Components/PrettyAccordion',
  component: PrettyAccordion,
}

export const Default = (args) => <PrettyAccordion {...args} />

Default.args = {
  title: 'Title'
}
