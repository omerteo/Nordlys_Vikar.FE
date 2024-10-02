import type { Preview } from "@storybook/react"
import { ThemeProvider } from "next-themes"
import React from "react"
import { NextIntlClientProvider } from "next-intl"
import en from "../messages/en.json"
import "../styles/tailwind.css"
import "./styles.css"

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: {
      defaultValue: ["light", "dark"],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <NextIntlClientProvider messages={en} locale="en">
            <Story />          
        </NextIntlClientProvider>
      </ThemeProvider>
    ),
  ],
}

export default preview
