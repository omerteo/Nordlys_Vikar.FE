import { Button } from "@/components/Shared/Button/Button"
import { Checkbox, CheckboxProps } from "@/components/Shared/Checkbox/Checkbox"
import { Textbox } from "@/components/Shared/Textbox/Textbox"
import { useTranslations } from "next-intl"

export type LoginFormProps = React.HTMLAttributes<HTMLFormElement>

const ForgotPassword = () => {
  return (
    <a href="#" className="text-xs text-blue-500 hover:text-blue-700">
      Forgot password?
    </a>
  )
}

const RememberMe = ({ ...props }: CheckboxProps) => {
  return <Checkbox label="Remember me" name={props.name} />
}

export function LoginForm({ ...props }: LoginFormProps) {
  const t = useTranslations("HomePage")
  return (
    <>
      <form {...props} className="flex flex-col">
        <Textbox label="Login with Bank-ID" name="bankId" aria-required />
        <Textbox
          label="Password"
          labelSecondary={<RememberMe name="remember" />}
          labelSecondaryAlt={<ForgotPassword />}
          name="password"
          type="password"
        />
        <Button type="submit" fullWidth name="submit">
          {t("login")}
        </Button>
      </form>
      Everything is perfect. Your account is ready and we should probably get you started!
    </>
  )
}
