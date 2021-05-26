import {
  ButtonHTMLAttributes,
  FC,
  forwardRef,
  JSXElementConstructor,
  useRef,
} from "react";
import cn from "classnames";
import s from "./Button.module.scss";
import mergeRefs from "react-merge-refs";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  variant?: "normal" | "outline";
  active?: boolean;
  type?: "submit" | "reset" | "button";
  Component?: string | JSXElementConstructor<any>;
  width?: string | number;
  loading?: boolean;
  disabled?: boolean;
}

const Button: FC<Props> = forwardRef((props, buttonRef) => {
  const {
    className,
    variant = "normal",
    children,
    active,
    width,
    loading = false,
    disabled = false,
    style = {},
    Component = "button",
    ...rest
  } = props;

  const ref = useRef<typeof Component>(null);

  const rootClassName = cn(
    s.root,
    {
      [s.normal]: variant === "normal",
      [s.outline]: variant === "outline",
      [s.loading]: loading,
      [s.disabled]: disabled,
    },
    className
  );

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      ref={mergeRefs([ref, buttonRef])}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
      {...rest}
    >
      {children}
      {loading && (
        <i className="pl-2 m-0 flex">
          <span>...</span>
        </i>
      )}
    </Component>
  );
});

/*interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
  variant?: "normal" | "danger";
  disabled?: boolean;
}

const Button: FC<Props> = ({ children, variant }) => {
  const classNames = cn(
    "p-2 pl-10 pr-10 font-semibold rounded-full text-sm shadow text-white block",
    {
      "bg-red-500 hover:bg-red-600 ": variant === "danger",
      "bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-800 active:ring-4":
        variant === "normal",
    }
  );

  return <button className={classNames}>{children}</button>;
};*/

export default Button;
