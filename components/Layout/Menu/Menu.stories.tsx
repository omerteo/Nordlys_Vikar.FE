import type { Meta, StoryObj } from "@storybook/react"

import { Menu } from "./Menu"

const items = [
  {
    label: "Dashboard",
    icon: "dashboard",
  },
  {
    label: "Doctor",
    icon: "doctor",
    details: [
      { label: "Submenu 1" },
      {
        label: "Add",
      },
    ],
  },
  {
    label: "Dashboard",
    icon: "patient",
  },
]

const meta = {
  component: Menu,
  args: {
    items,
  },
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
