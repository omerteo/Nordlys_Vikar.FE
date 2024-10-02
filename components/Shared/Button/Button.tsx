import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const button = cva(["btn", "delay-50"], {
  variants: {
    intent: {
      primary: ["glass", "hover: glass"],
      secondary: ["btn-secondary"],
      neutral: ["btn-neutral"],
      accent: ["btn-accent"],
      link: ["btn-link"],
    },
    size: {
      sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-1.5", "px-4"],
      lg: ["min-w-32", "h-full", "min-h-12", "text-lg", "py-2.5", "px-6"],
    },
    fullWidth: { true: ["btn-block"], false: [] },
  },
  defaultVariants: {
    intent: "neutral",
    size: "lg",
  },
})

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  name?: string
  isLoading?: boolean
}

const Spinner = () => <span className="loading loading-spinner"></span>

export function Button({ className, intent, size, fullWidth, ...props }: ButtonProps) {
  return (
    <button className={twMerge(button({ intent, size, className, fullWidth }))} {...props} data-testid={props.name}>
      {props.isLoading && <Spinner />}
      {props.children}
    </button>
  )
}
