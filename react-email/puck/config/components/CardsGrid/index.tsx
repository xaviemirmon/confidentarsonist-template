import { ComponentConfig, Slot } from "@measured/puck";

import sectionTextField, {
  defaultSectionTextValue,
} from "@/puck/config/fields/section-text";
import { CardProps, defaultCardProps } from "@/puck/config/components/Card";

import CardsGrid, {
  CardsGridProps as CardsGridPropsComponentSlots,
} from "./CardsGrid";

type CardsGridProps = { columns: { content: Slot }[] } & Omit<
  CardsGridPropsComponentSlots,
  "columns"
>;

export type { CardsGridProps };

const defaultInlineCard: CardProps = { ...defaultCardProps, variant: "inline" };

const cardsGridConfig: ComponentConfig<CardsGridProps> = {
  fields: {
    ...sectionTextField.objectFields,
    numberColumns: { type: "number", min: 1, max: 2 },
    columns: {
      type: "array",
      min: 1,
      max: 2,
      arrayFields: {
        content: { type: "slot", allow: ["Card"], ai: { stream: false } },
      },
      visible: false,
      ai: { stream: false },
    },
  },
  resolveData: (data, params) => {
    if (!params.changed.numberColumns) {
      return data;
    }

    const lastCols = params.lastData?.props.columns ?? [];
    const currNumberCols = data.props.numberColumns;

    const newColumns = Array.from({ length: currNumberCols }, (_, i) =>
      lastCols[i] ? { ...lastCols[i] } : { content: [] },
    );

    return {
      ...data,
      props: {
        ...data.props,
        columns: newColumns,
      },
    };
  },
  defaultProps: {
    ...defaultSectionTextValue,
    numberColumns: 2,
    columns: [
      { content: [{ type: "Card", props: defaultInlineCard }] },
      { content: [{ type: "Card", props: defaultInlineCard }] },
    ],
  },
  render: CardsGrid,
};

export default cardsGridConfig;
