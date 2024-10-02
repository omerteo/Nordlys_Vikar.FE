import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    intent: "primary",
    children: "Button",
    size: "lg",
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary", "neutral", "ghost", "link"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => <Button {...args} />,
}

export const Primary: Story = {
  render: (args) => <Button intent="primary">Button</Button>,
}

export const Loading: Story = {
  render: (args) => (
    <Button intent="primary" isLoading>
      Button
    </Button>
  ),
}

export default meta
