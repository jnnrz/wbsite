import { FC, ReactNode } from "react";
import { Button } from "@components/index";
import cn from "classnames";
import s from "./pricing-card.module.scss";

interface Props {
  plan: string;
  price: string;
  children: ReactNode | ReactNode[];
  highlight?: boolean;
}

const PricingCard: FC<Props> = ({
  plan,
  price,
  children,
  highlight = false,
}): JSX.Element => {
  const classNames = cn(s.root, {
    ["border-blue-600 order-first sm:order-2"]: highlight === true,
  });

  return (
    <div className={classNames}>
      <div className={s.header}>
        {highlight && <div className={s.label}>recommended</div>}
        <div className="mt-4">
          <span className="text-2xl text-blue-600">{plan}</span>
        </div>
        <div>
          <span className="text-5xl font-bold">{price}</span>
        </div>

        <div className={s.content}>{children}</div>
      </div>

      <div className="w-full">
        <Button variant="normal" className="w-full rounded-t-none">
          Contratar
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
