import { PropsWithChildren } from "react";
import { Column, Row } from "@react-email/components";

import { SectionTextFieldProps } from "@/puck/config/fields/section-text";
import { CardFieldProps } from "@/puck/config/fields/card";
import ContentSection from "@/puck/components/content-section";
import Card from "@/puck/components/card";

export type CardsGridProps = {
  cards: CardFieldProps[];
} & SectionTextFieldProps;

const CardGridColumn = ({ children }: PropsWithChildren) => {
  return (
    <Column
      style={{
        width: "50%",
        paddingRight: 4,
        paddingLeft: 4,
        verticalAlign: "top",
      }}
    >
      {children}
    </Column>
  );
};

const CardsGrid = ({ tag, title, description, cards }: CardsGridProps) => {
  const renderedCards = [];
  let currRow = [];

  cards.forEach((card, index) => {
    currRow.push(
      <CardGridColumn key={index}>
        <Card {...card} />
      </CardGridColumn>,
    );

    // Breaking point or last card (in which case we are in last row)
    if ((index + 1) % 2 === 0 || index === cards.length - 1) {
      renderedCards.push(<Row key={index}>{currRow}</Row>);
      currRow = [];
      return;
    }
  });

  return (
    <ContentSection tag={tag} title={title} description={description}>
      {renderedCards}
    </ContentSection>
  );
};

export default CardsGrid;
