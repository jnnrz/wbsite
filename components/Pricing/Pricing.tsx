import PricingCard from "@components/PricingCard";
import { Check } from "@components/Icons";

import s from "./pricing.module.scss";

const Pricing = (): JSX.Element => {
  return (
    <div id="pricing" className={s.root}>
      <PricingCard plan="Basic" price="$10">
        <dl>
          <dt className="sr-only">Features</dt>
          <dd>
            <Check className="text-green-500 mr-2" />
            Dominio anual
          </dd>
          <dd>
            <Check className="text-green-500 mr-2" />
            Hosting
          </dd>
          <dd>
            <Check className="text-green-500 mr-2" />5 Módulos
          </dd>
          <dd>
            <Check className="text-green-500 mr-2" />
            Plantilla de Diseño Web Premium
          </dd>
          <dd>
            <Check className="text-green-500 mr-2" />
            Optimizado para SEO
          </dd>
          <dd>
            <Check className="text-green-500 mr-2" />
            Diseño Responsive
          </dd>
        </dl>
      </PricingCard>
      <PricingCard plan="Pro" price="$20" highlight={true}>
        <dl>
          <dt className="sr-only">Features</dt>
          <dd>
            <Check className="text-green-500 mr-2" />
            Dominio anual
          </dd>
          <dd>
            <Check className="text-green-500 mr-2" />
            Hosting
          </dd>
          <dd>
            <Check className="text-green-500 mr-2" />5 Módulos
          </dd>
          <dd>
            <Check className="text-green-500 mr-2" />
            Plantilla de Diseño Web Premium
          </dd>
          <dd>
            <Check className="text-green-500 mr-2" />
            Optimizado para SEO
          </dd>
          <dd>
            <Check className="text-green-500 mr-2" />
            Diseño Responsive
          </dd>
        </dl>
      </PricingCard>
      <PricingCard plan="SuperDuper" price="$30">
        <dl>
          <dt className="sr-only">Features</dt>
          <dd>
            <Check className="text-green-500 mr-2" />
            Dominio anual
          </dd>
          <dd>
            <Check className="text-green-500 mr-2" />
            Hosting
          </dd>
          <dd>
            <Check className="text-green-500 mr-2" />5 Módulos
          </dd>
          <dd>
            <Check className="text-green-500 mr-2" />
            Plantilla de Diseño Web Premium
          </dd>
          <dd>
            <Check className="text-green-500 mr-2" />
            Optimizado para SEO
          </dd>
          <dd>
            <Check className="text-green-500 mr-2" />
            Diseño Responsive
          </dd>
          <dd>
            <Check className="text-green-500 mr-2" />
            Cocaine and Hookers
          </dd>
        </dl>
      </PricingCard>
    </div>
  );
};

export default Pricing;
