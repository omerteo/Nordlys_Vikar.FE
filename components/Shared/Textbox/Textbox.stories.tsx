import type { ArgTypes, Meta, StoryObj } from "@storybook/react"

import { Textbox } from "./Textbox"
import { userEvent, within } from "@storybook/test"

const meta = {
  component: Textbox,
} satisfies Meta<typeof Textbox>

export default meta

type Story = StoryObj<typeof meta>

export const Empty: Story = {}

const argTypes: Partial<ArgTypes> = {
  label: {
    control: { type: "text" },
  },
  type: {
    options: ["text", "password"],
    control: { type: "radio" },
  },
}

export const Filled: Story = {
  args: {
    
  },
  argTypes,
}

export const Default: Story = {}
