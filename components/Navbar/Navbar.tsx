import { Container } from "@components/index";
import NavbarLink from "@components/NavbarLink";
import { FC, Fragment, useState } from "react";
import { Transition, Popover } from "@headlessui/react";
import { XIcon, MenuIcon } from "@heroicons/react/outline";
import cn from "classnames";
import s from "./navbar.module.scss";

interface Props {
  className?: string;
}

const Navbar: FC<Props> = ({ className }): JSX.Element => {
  const classNames = cn(s.root, className);

  return (
    <Popover className={classNames}>
      {({ open }) => (
        <Container>
          <div className="flex justify-between items-center">
            <div className="text-3xl text-black">
              Logirijillo<span className="text-blue-500">.</span>
            </div>

            <div className={s.links}>
              <NavbarLink href="/" title="Home" />
              <NavbarLink href="/about" title="Sobre Nosotros" />
              <NavbarLink href="/contact" title="Contacto" />
            </div>

            <div className="flex items-center md:hidden outline-none">
              <Popover.Button className={s.menuBtn}>
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className={s.mobileNav}>
                <div className="flex justify-between items-center px-5 pt-4">
                  <div className="text-3xl text-black">
                    Logirijillo<span className="text-blue-500">.</span>
                  </div>

                  <Popover.Button className={s.menuBtn}>
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>

                <div className="px-2 pt-2 pb-3 space-y-1">
                  <NavbarLink href="/" title="Home" />
                  <NavbarLink href="/about" title="Sobre Nosotros" />
                  <NavbarLink href="/contact" title="Contacto" />
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Container>
      )}
    </Popover>
  );
};

export default Navbar;
