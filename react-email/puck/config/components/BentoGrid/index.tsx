import { ComponentConfig } from "@measured/puck";

import linkField, {
  defaultLinkValue,
} from "@/puck/config/fields/link";
import imageField, {
  defaultImageValue,
} from "@/puck/config/fields/image";
import createSummaryFunc from "@/puck/lib/create-summary-func";

import BentoGrid, { BentoGridProps } from "./BentoGrid";

export type { BentoGridProps };

const bentoGrid: ComponentConfig<{ props: BentoGridProps }> = {
  fields: {
    title: { type: "text", contentEditable: true },
    description: { type: "textarea", contentEditable: true },
    cta: linkField,
    image: imageField,
    products: {
      type: "array",
      min: 1,
      max: 2,
      arrayFields: {
        image: imageField,
        title: { type: "text", contentEditable: true },
        description: { type: "textarea", contentEditable: true },
      },
      getItemSummary: createSummaryFunc((item) => item.title),
      defaultItemProps: {
        image: defaultImageValue,
        title: "Feature",
        description: "Feature description...",
      },
    },
  },
  defaultProps: {
    title: "Grid Title",
    description: "Grid Description.",
    cta: { ...defaultLinkValue, label: "Link →" },
    image: {
      alt: "Grid main image",
      src: "https://placehold.jp/f5f5f5/f5f5f5/150x150.png",
    },
    products: Array.from({ length: 2 }, () => ({
      image: {
        alt: "Product image",
        src: "https://placehold.jp/f5f5f5/f5f5f5/150x150.png",
      },
      title: "Product title",
      description: "Product description.",
    })),
  },
  render: BentoGrid,
};

export default bentoGrid;
