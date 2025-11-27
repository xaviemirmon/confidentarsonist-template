import {
  CompoundContent,
  CompoundContentProps,
} from "@/components/compounds/content";
import {
  CompoundContainer,
  CompoundContainerProps,
} from "@/components/compounds/container";
import { CompoundArticleCard } from "@/components/compounds/article-card";
import { PuckComponent, Slot } from "@measured/puck";

export interface FeatureCardsProps extends CompoundContentProps {
  padding?: CompoundContainerProps["padding"];
  cards: Slot;
}

export const FeatureCard: PuckComponent<CompoundContainerProps> =
  CompoundArticleCard;

export const FeatureCards: PuckComponent<FeatureCardsProps> = ({
  padding,
  badge,
  heading,
  description,
  buttons,
  cards: Cards,
  alignContent = "start",
  className,
}) => {
  return (
    <CompoundContainer padding={padding} className={className}>
      <div className="flex flex-col gap-10">
        <CompoundContent
          badge={badge}
          heading={heading}
          description={description}
          buttons={buttons}
          alignContent={alignContent}
          spacing="tight"
        />
        {Cards && (
          <Cards className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" />
        )}
      </div>
    </CompoundContainer>
  );
};
