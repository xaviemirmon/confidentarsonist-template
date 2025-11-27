import { SlotComponent } from "@measured/puck";
import { Column, Row } from "@react-email/components";

import { SectionTextFieldProps } from "@/config/fields/section-text";
import ContentSection from "@/components/content-section";

export type CardsGridProps = {
  numberColumns: number;
  columns: { content: SlotComponent }[];
} & SectionTextFieldProps;

const CardsGrid = ({ tag, title, description, columns }: CardsGridProps) => {
  const columnElements = columns?.map(({ content: Content }, index) => (
    <Column
      key={index}
      style={{
        width: "50%",
        paddingRight: 4,
        paddingLeft: 4,
        verticalAlign: "top",
      }}
    >
      <Content />
    </Column>
  ));

  return (
    <ContentSection tag={tag} title={title} description={description}>
      <Row>{columnElements}</Row>
    </ContentSection>
  );
};

export default CardsGrid;
