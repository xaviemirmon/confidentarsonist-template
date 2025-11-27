import { Config as PuckConfig, Data as PuckData } from "@measured/puck";

import root, { RootProps } from "@/config/root";
import Header, { HeaderProps } from "@/config/components/Header";
import Footer, { FooterProps } from "@/config/components/Footer";
import Heading, { HeadingProps } from "@/config/components/Heading";
import Text, { TextProps } from "@/config/components/Text";
import BentoGrid, { BentoGridProps } from "@/config/components/BentoGrid";
import CardsGrid, { CardsGridProps } from "@/config/components/CardsGrid";
import Card, { CardProps } from "@/config/components/Card";
import FeatureList, { FeatureListProps } from "@/config/components/FeatureList";
import Pricing, { PricingProps } from "@/config/components/Pricing";
import PricingTier, { PricingTierProps } from "@/config/components/PricingTier";
import ShoppingCart, {
  ShoppingCartProps,
} from "@/config/components/ShoppingCart";

export type Props = {
  Header: HeaderProps;
  Footer: FooterProps;
  Heading: HeadingProps;
  Text: TextProps;
  BentoGrid: BentoGridProps;
  CardsGrid: CardsGridProps;
  Card: CardProps;
  FeatureList: FeatureListProps;
  Pricing: PricingProps;
  PricingTier: PricingTierProps;
  ShoppingCart: ShoppingCartProps;
};

export type Config = PuckConfig<{
  root: RootProps;
  components: Props;
  categories: ["Navigation", "Content", "Business"];
}>;

// We avoid the name config as next gets confused
const conf: Config = {
  root,
  categories: {
    Navigation: {
      components: ["Header", "Footer"],
    },
    Content: {
      components: [
        "Heading",
        "Text",
        "BentoGrid",
        "CardsGrid",
        "Card",
        "FeatureList",
      ],
    },
    Business: {
      components: ["Pricing", "PricingTier", "ShoppingCart"],
    },
  },
  components: {
    Header,
    Footer,
    Heading,
    Text,
    BentoGrid,
    CardsGrid,
    Card,
    Pricing,
    PricingTier,
    ShoppingCart,
    FeatureList,
  },
};

export type Data = PuckData<Props>;

export default conf;
