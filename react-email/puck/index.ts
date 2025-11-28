import { Config as PuckConfig, Data as PuckData } from "@measured/puck";

import root, { RootProps } from "@/puck/config/root";
import Header, { HeaderProps } from "@/puck/config/components/Header";
import Footer, { FooterProps } from "@/puck/config/components/Footer";
import Heading, { HeadingProps } from "@/puck/config/components/Heading";
import Text, { TextProps } from "@/puck/config/components/Text";
import BentoGrid, { BentoGridProps } from "@/puck/config/components/BentoGrid";
import CardsGrid, { CardsGridProps } from "@/puck/config/components/CardsGrid";
import Card, { CardProps } from "@/puck/config/components/Card";
import FeatureList, { FeatureListProps } from "@/puck/config/components/FeatureList";
import Pricing, { PricingProps } from "@/puck/config/components/Pricing";
import PricingTier, { PricingTierProps } from "@/puck/config/components/PricingTier";
import ShoppingCart, {
  ShoppingCartProps,
} from "@/puck/config/components/ShoppingCart";

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
