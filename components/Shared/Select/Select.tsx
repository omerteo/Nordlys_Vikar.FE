import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const select = cva(["w-full", "select", "select-bordered"], {
  variants: {
    intent: {
      primary: ["select-primary"],
      secondary: [""],
    },
    size: {
      sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-1.5", "px-4"],
      lg: ["min-w-32", "h-full", "min-h-12", "text-lg", "py-2.5", "px-6"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "sm",
  },
})

export interface SelectProps extends React.HTMLAttributes<HTMLSelectElement>, VariantProps<typeof select> {
  name?: string
  required?: boolean
  children?: React.ReactNode
}

export function Select({ intent, className, ...props }: SelectProps) {
  return (
      <select
        name={props.name}
        className={twMerge(select({ intent, className }))}
        data-testid={props.name}
      >
        {props.children}
      </select>
  )
}
