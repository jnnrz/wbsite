import { FC } from "react";
import cn from "classnames";
import s from "./hero.module.scss";
import { Button } from "@components/index";

interface Props {
  className?: string;
}

const Hero: FC<Props> = ({ className }): JSX.Element => {
  const classNames = cn(s.root, className);

  return (
    <div className={classNames}>
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl w-full sm:text-center">
        <span className="block xl:inline">Data to enrich your</span>{" "}
        <span className="block text-blue-600 xl:inline">online business</span>
      </h1>
      <p className="mt-3 text-left sm:text-center text-base text-gray-500 sm:mt-5 sm:text-lg max-w-2lg md:max-w-4xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <div className="mt-5 sm:mt-8 flex sm:justify-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 flex-col sm:flex-row w-full">
        <Button variant="normal">Empezar</Button>
        <Button variant="outline" className="ml-3">
          Live Demo
        </Button>
      </div>
    </div>
  );
};

export default Hero;
