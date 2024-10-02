import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"

const avatar = cva(["avatar"], {
  variants: {
    intent: {
      primary: ["rounded"],
      secondary: ["bg-transparent", "text-blue-400", "hover:enabled:bg-blue-400", "hover:enabled:text-white"],
    },
    size: {
      sm: ["w-16"],
      lg: ["w-32"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "lg",
  },
})

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement>, VariantProps<typeof avatar> {
  href: string
  src: string
}

export function Avatar({ className, intent, size, ...props }: AvatarProps) {
  return (
    <div className={className} {...props}>
      <div className={twMerge(avatar({ intent, size }))}>
        <img src={props.src} />
      </div>
    </div>
  )
}
