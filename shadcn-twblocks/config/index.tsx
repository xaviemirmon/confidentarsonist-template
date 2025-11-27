import { Config as PuckConfig, Data as PuckData } from "@measured/puck";

import Header, { HeaderProps } from "@/components/blocks/header";
import Hero, { HeroProps } from "@/components/blocks/hero";
import Customers, { CustomersProps } from "@/components/blocks/customers";
import Testimonials, {
  TestimonialsProps,
} from "@/components/blocks/testimonials";
import TwoColumn, { TwoColumnProps } from "@/components/blocks/two-column";
import Bento, { BentoProps } from "@/components/blocks/bento";
import FeatureCards, {
  FeatureCardsProps,
} from "@/components/blocks/feature-cards";
import CardGrid, { CardGridProps } from "@/components/blocks/card-grid";
import Stats, { StatsProps } from "@/components/blocks/stats";
import ArticleCard, {
  ArticleCardProps,
} from "@/components/blocks/article-card";
import Articles, { ArticlesProps } from "@/components/blocks/articles";
import Faq, { FaqProps } from "@/components/blocks/faq";
import Cta, { CtaProps } from "@/components/blocks/cta";
import Pricing, { PricingProps } from "@/components/blocks/pricing";
import ContactUs, { ContactUsProps } from "@/components/blocks/contact-us";
import Footer, { FooterProps } from "@/components/blocks/footer";

export type Props = {
  ArticleCard: ArticleCardProps;
  Header: HeaderProps;
  Hero: HeroProps;
  Customers: CustomersProps;
  Testimonials: TestimonialsProps;
  Bento: BentoProps;
  FeatureCards: FeatureCardsProps;
  CardGrid: CardGridProps;
  TwoColumn: TwoColumnProps;
  Stats: StatsProps;
  Articles: ArticlesProps;
  Faq: FaqProps;
  Cta: CtaProps;
  Pricing: PricingProps;
  ContactUs: ContactUsProps;
  Footer: FooterProps;
};

export type Config = PuckConfig<Props>;

// We avoid the name config as next gets confused
export const conf: Config = {
  categories: {
    navigation: {
      components: ["Header", "Footer"],
    },
    introduction: {
      components: ["Hero"],
    },
    content: {
      components: [
        "Bento",
        "CardGrid",
        "FeatureCards",
        "TwoColumn",
        "Articles",
        "ArticleCard",
        "Faq",
        "Cta",
      ],
    },
    socialProof: {
      title: "Social Proof",
      components: ["Testimonials", "Stats", "Customers"],
    },
    business: {
      components: ["Pricing", "ContactUs"],
    },
  },
  components: {
    ArticleCard,
    Header,
    Hero,
    Customers,
    Testimonials,
    Bento,
    FeatureCards,
    CardGrid,
    TwoColumn,
    Stats,
    Articles,
    Faq,
    Cta,
    Pricing,
    ContactUs,
    Footer,
  },
  root: {
    ai: {
      defaultZone: {
        disallow: ["ArticleCard"],
      },
    },
  },
};

export type Data = PuckData<Props>;

export { ErrorBoundary } from "@/components/temp/error-boundary";

export {
  EditorModeProvider,
  useIsEditorMode,
} from "@/context/is-editor-mode-context";

export default conf;
