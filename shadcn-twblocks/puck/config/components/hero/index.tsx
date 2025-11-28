import { ComponentConfig } from "@measured/puck";
import {
  padding,
  paddingDefaults,
  badge,
  buttons,
  images,
  image1x1Placeholder,
  image9x16Placeholder,
} from "@/puck/config/fields";
import { Hero, HeroProps } from "./hero";
import { getRandomAdjective } from "@/puck/lib/utils";

export type { HeroProps };

export const conf: ComponentConfig<HeroProps> = {
  fields: {
    heading: { type: "text", contentEditable: true },
    description: { type: "textarea", contentEditable: true },
    adjectives: {
      type: "array",
      max: 5,
      getItemSummary: (item, index = 0) =>
        item.adjective || `Adjective ${index + 1}`,
      arrayFields: {
        adjective: { type: "text" },
      },
      defaultItemProps: {
        adjective: getRandomAdjective(),
      },
    },
    badge,
    buttons,
    imageLayout: {
      // TODO: puck should format labels automatically so I don't have to define this
      label: "image layout",
      type: "select",
      options: [
        { label: "single image 1x1 (default)", value: "1x1" },
        { label: "three images 1x1, 9:16, 1x1", value: "1x1-9x16-1x1" },
        { label: "single image 16x9", value: "16x9" },
      ],
      ai: {
        instructions:
          "Never select the 'single image 16x9' option. Always include 3 images when selecting the 'three images 1x1, 9:16, 1x1' option.",
      },
    },
    images: { ...images, max: 3 },
    padding,
  },
  defaultProps: {
    heading: "Heading",
    description: "Description",
    adjectives: [],
    badge: {
      label: "Badge",
      url: "",
      variant: "secondary",
    },
    buttons: [
      {
        label: "Secondary CTA",
        icon: "ellipsis",
        variant: "secondary",
      },
      {
        label: "Primary CTA",
        icon: "move-right",
        variant: "default",
      },
    ],
    imageLayout: "1x1-9x16-1x1",
    images: [image1x1Placeholder, image9x16Placeholder, image1x1Placeholder],
    padding: paddingDefaults,
  },
  render: Hero,
};

export default conf;
