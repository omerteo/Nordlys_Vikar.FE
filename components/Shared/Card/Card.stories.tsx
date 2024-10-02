import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "./Card"

const meta: Meta<typeof Card> = {
  title: "Design System/Molecules/Card",
  component: Card,
  args: {
    intent: "primary",
    children: "Card",
    size: "lg",
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

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    children: "Card content",
  },

  render: (args) => <Card {...args} />,
}

export default meta
