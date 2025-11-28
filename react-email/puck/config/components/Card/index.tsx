import { ComponentConfig } from "@measured/puck";

import cardField, {
  defaultCardProps,
  resolveCardFields,
} from "@/puck/config/fields/card";

import Card, { CardProps } from "./Card";

export type { CardProps };

const cardConfig: ComponentConfig<CardProps> = {
  ai: {
    instructions:
      "A card component for emails. use it to display a summary of content and a link to it. you can use this to display products, articles, or any other type of content. the featured variant makes it more prominent, so use it to highlight important content.",
  },
  fields: cardField.objectFields,
  resolveFields: (data, params) => {
    return resolveCardFields(data.props, { fields: params.fields });
  },
  defaultProps: defaultCardProps,
  render: Card,
};

export default cardConfig;
