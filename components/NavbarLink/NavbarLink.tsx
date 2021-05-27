import { FC } from "react";
import Link from "next/link";
import s from "./navbarlink.module.scss";

interface Props {
  href: string;
  title: string;
}

const NavbarLink: FC<Props> = (props): JSX.Element => {
  const { href, title } = props;

  return (
    <div className={s.root}>
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </div>
  );
};

export default NavbarLink;
