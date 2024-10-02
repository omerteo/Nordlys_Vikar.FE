import type { Meta, StoryObj } from "@storybook/react"

import { ThemeSwitcher } from "./ThemeSwitcher"

const meta = {
  component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
