import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const card = cva(["card", "bg-base-100", "w-96", "shadow-xl"], {
  variants: {
    intent: {
      primary: ["bg-blue-400", "text-white", "hover:enabled:bg-blue-700"],
      secondary: ["bg-transparent", "text-blue-400", "hover:enabled:bg-blue-400", "hover:enabled:text-white"],
    },
    size: {
      sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-1.5", "px-4"],
      lg: ["min-w-32", "h-full", "min-h-12", "text-lg", "py-2.5", "px-6"],
    },
    // underline: { true: ["underline"], false: [] },
  },
  defaultVariants: {
    intent: "primary",
    size: "lg",
  },
})

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof card> {
  underline?: boolean
  href: string
}

export function Card({ className, intent, size, underline, ...props }: CardProps) {
  return (
    <div className={twMerge(card({ intent, size, className }))} {...props}>
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>{props.children}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}
