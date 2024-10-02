import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import Image from "next/image";
import Link from "next/link";

const menu = cva(["menu", "bg-base-200", "rounded-box"])

interface MenuItemProps {
  label?: string
  icon?: string
  details?: MenuItemProps[]
  item?: MenuItemProps
}

const Icon = ({ icon }: { icon: string }) => <Image src={`/icons/${icon}.svg`} alt={icon} width={15} height={15} />

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <>
      <li>
        {item && item.details ? (
          <details open>
            <summary>{item.icon && <Icon icon={item.icon} />} {item.label}</summary>
            <ul>
              {item.details.map((item: any) => (
                <MenuItem item={item} />
              ))}
            </ul>
          </details>
        ) : (
          <Link href="#">
            {item && item.icon && <Icon icon={item.icon} />}
            {item && item.label}
          </Link>
        )}
      </li>
    </>
  )
}

export interface MenuProps extends React.HTMLAttributes<HTMLLabelElement>, VariantProps<typeof menu> {
  items: MenuItemProps[]
}

export function Menu({ className, items }: MenuProps) {
  return (
    <ul className={twMerge(menu({ className }))}>
      {items.map((item: MenuItemProps) => (
        <MenuItem item={item} />
      ))}
    </ul>
  )
}
