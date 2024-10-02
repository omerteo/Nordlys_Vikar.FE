import { cva, type VariantProps } from "class-variance-authority"
import { InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

const textbox = cva(["w-full", "input", "input-bordered"], {
  variants: {
    intent: {
      primary: ["textbox-primary"],
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

type Label = string | React.ReactNode | React.ReactNode[] | React.ReactElement | JSX.Element

export interface TextboxProps extends React.HTMLAttributes<HTMLInputElement>, VariantProps<typeof textbox> {
  label?: Label
  labelAlt?: Label
  placeholder?: string
  labelSecondary?: Label
  labelSecondaryAlt?: Label
  name?: string
  type?: string
  required?: boolean
}



export function Textbox({ intent, className, ...props }: TextboxProps) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{props.label}</span>
        <span className="label-text-alt">{props.labelAlt}</span>
      </div>
      <input
        name={props.name}
        placeholder={props.placeholder}
        className={twMerge(textbox({ intent, className }))}
        data-testid={props.name}
        type={props.type || "text"}
      />
      <div className="label">
        <span className="label-text">{props.labelSecondary}</span>
        <span className="label-text-alt">{props.labelSecondaryAlt}</span>
      </div>
    </label>
  )
}
