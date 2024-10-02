import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const checkbox = cva(["checkbox"], {
  variants: {
    intent: {
      primary: ["checkbox-primary"],
      secondary: [""],
    },
    size: {
      sm: ["checkbox-sm"],
      lg: ["min-w-32", "h-full", "min-h-12", "text-lg", "py-2.5", "px-6"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "sm",
  },
})

type Label = string

export interface CheckboxProps extends React.HTMLAttributes<HTMLLabelElement>, VariantProps<typeof checkbox> {
  label?: Label
  defaultChecked?: boolean
  name?: string
  checked?: boolean
}

export function Checkbox({ intent, className, ...props }: CheckboxProps) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <input
          type="checkbox"
          className={twMerge(checkbox({ intent, className }))}
          data-testid={props.name}
          checked={props.checked}
        />
        <span className="label-text">{props.label}</span>
      </label>
    </div>
  )
}
