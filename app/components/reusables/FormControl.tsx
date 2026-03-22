import { useState } from "react"
import { cn } from "~/lib/utils"
import { icons } from "~/assets/icons"
import Svg from "./Svg"

type Props = (
  | {
    as: 'input';
    labelText?: string;
    labelClassNames?: string;
    type?: string;
    icon?: string;
    name?: string;
  } & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'>
  | {
    labelText?: string;
    labelClassNames?: string;
    as: 'textarea';
    name: string;
  } & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'>)
  & { error?: string }

export default function FormControl({ labelClassNames, labelText, error, ...props }: Props) {
  const [showPassword, setShowPassword] = useState(false)
  const formControlClasses = cn('p-3 py-2 rounded-lg cursor-text w-full font-medium outline outline-1 outline-secondary hover:outline-accent focus-within:outline',
    'flex gap-2 items-center', { 'outline-red-400 hover:outline-red-400': error }, props.className
  )
  const errorElement = <span className={cn('mt-1 text-red-400 font-semibold leading-none flex gap-1.5 items-end', { 'hidden': !error })}>
    <Svg src={icons.warningIcon} />{error}
  </span>
  return (
    <label htmlFor={props.name} className={`block font-bold ${labelClassNames}`}>{labelText}{props.required ? <span className="text-red-400" >*</span> : ""}
      {props.as === 'input'
        ? <>
          <div aria-invalid={!!error} className={formControlClasses}>
            <Svg src={props.icon ?? ''} className={cn('basis-6', { 'hidden': !props.icon })} />
            <input {...props} type={props.type === 'password' && showPassword ? 'text' : props.type}
              className={cn('bg-transparent autofill:bg-transparent outline-none grow shrink min-w-0 h-6')} />
            <Svg src={showPassword ? icons.hiddenIcon : icons.viewIcon}
              onClick={() => setShowPassword(prev => !prev)}
              className={cn('basis-6 cursor-pointer', { 'hidden': props.type !== 'password' })} />
          </div>
          {errorElement}
        </>
        : <>
          <textarea cols={30} rows={6} {...props} className={`${formControlClasses} ${props.className}`}></textarea>
          {errorElement}
        </>
      }
    </label>
  )
}
