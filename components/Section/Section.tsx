import { FC, ReactNode } from "react";

interface Props {
  title?: string;
  children: ReactNode | ReactNode[];
}

const Section: FC<Props> = (props): JSX.Element => {
  const { title, children } = props;

  return (
    <>
      <h1 className="text-4xl text-center font-bold">{title}</h1>
      <div>{children}</div>
    </>
  );
};

export default Section;
