import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'UI/Components/Button',
  component: Button,
  tags: ['docsPage'],
  argTypes: {
    icon: {
      control: { type: 'select' }
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button'
  }
}

export const Secondary: Story = {
  args: {
    size: 'default',
    label: 'Button'
  }
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Button'
  }
}
