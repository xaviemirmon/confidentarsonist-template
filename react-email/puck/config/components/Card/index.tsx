import { ComponentConfig } from "@measured/puck";

import imageField from "@/puck/config/fields/image";
import linkField, {
  defaultLinkValue,
} from "@/puck/config/fields/link";

import Card, { CardProps, cardTypes, cardVariants } from "./Card";

export type { CardProps };

export const defaultCardProps: CardProps = {
  type: "article",
  variant: "inline",
  image: {
    src: "https://placehold.jp/f5f5f5/f5f5f5/150x150.png",
    alt: "Alt text",
  },
  tag: "Tag",
  title: "Title",
  description: "",
  price: "$100",
  button: { ...defaultLinkValue, label: "Read more" },
};

const cardConfig: ComponentConfig<CardProps> = {
  fields: {
    type: {
      type: "radio",
      options: cardTypes.map((variant) => ({
        label: variant,
        value: variant,
      })),
    },
    variant: {
      type: "radio",
      options: cardVariants.map((option) => ({
        label: option,
        value: option,
      })),
    },
    image: imageField,
    tag: { label: "tagline", type: "text", contentEditable: true },
    title: { type: "text", contentEditable: true },
    description: { type: "textarea", contentEditable: true },
    // TODO: Move this field definition to resolve fields when fieldTransforms not working in resolveFields gets fixed
    // https://github.com/puckeditor/puck/issues/1276
    price: { type: "text", contentEditable: true },
    button: linkField,
  },
  resolveFields: (data, params) => {
    const newFields = { ...params.fields };

    if (data.props.type !== "product") {
      delete newFields.price;
    }

    return newFields;
  },
  defaultProps: defaultCardProps,
  render: Card,
};

export default cardConfig;
