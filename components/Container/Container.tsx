import { FC, ReactNode } from "react";
import cn from "classnames";

interface Props {
  className?: string;
  children?: ReactNode;
  clean?: boolean;
}

const Container: FC<Props> = ({ className, children, clean }) => {
  const classNames = cn(className, "container mx-auto max-w-5xl");

  return <div className={classNames}>{children}</div>;
};

export default Container;
