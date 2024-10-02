import type { Meta, StoryObj } from "@storybook/react"

import { Checkbox } from "./Checkbox"

const meta = {
  component: Checkbox,
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Save me",
    checked: true,
  },
  argTypes: {
    label: {
      control: { type: "text" },
    },
    checked: {
      options: [true, false],
      control: { type: "boolean" },
    },
  },
}
export const Loading: Story = {
  render: (args) => <Checkbox intent="primary" label="Save me" />,
}
