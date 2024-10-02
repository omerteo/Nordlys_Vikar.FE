import type { Meta, StoryObj } from "@storybook/react"

import { Avatar } from "./Avatar"

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "Design System/Molecules/Avatar",
  args: {
    intent: "primary",
    size: "lg",
    src: "https://via.placeholder.com/150",
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof Avatar>

export default meta

export const Default: Story = {
  render: (args) => <Avatar {...args} />,
}
