"use client"

// import { useTheme } from "next-themes";
import { useTheme } from "next-themes"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      {/* Daisy UI already assigns an click event listener to the component, we MUST listen for the change event in the input to not duplicated calls while both event runs. */}
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>

      {/* See Daisy UI's documentation for the full component. */}
    </>
  )
}
