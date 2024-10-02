type Label = string | React.ReactNode | React.ReactNode[] | React.ReactElement | JSX.Element

export interface TextboxProps extends React.HTMLAttributes<HTMLLabelElement> {
  label?: Label
  labelAlt?: Label
  labelSecondary?: Label
  labelSecondaryAlt?: Label
}

export function FormControl({ children, ...props }: TextboxProps) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{props.label}</span>
        <span className="label-text-alt">{props.labelAlt}</span>
      </div>
        {children}
      <div className="label">
        <span className="label-text">{props.labelSecondary}</span>
        <span className="label-text-alt">{props.labelSecondaryAlt}</span>
      </div>
    </label>
  )
}


