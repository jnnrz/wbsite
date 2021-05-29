import { FC } from "react";
import cn from "classnames";

interface Props {
  className: string;
  stroke?: string;
  strokeWidth?: string;
  strokeLineJoin?: "miter" | "round" | "bevel" | "inherit";
}

const Check: FC<Props> = (props): JSX.Element => {
  const {
    className,
    stroke = "currentColor",
    strokeLineJoin = "round",
    strokeWidth = "1.5",
  } = props;
  const classNames = cn(className);

  return (
    <div>
      <svg width="12" height="8" fill="none" className={classNames}>
        <path
          d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinejoin={strokeLineJoin}
        />
      </svg>
    </div>
  );
};

export default Check;
