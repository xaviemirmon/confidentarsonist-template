import { Field } from "@measured/puck";
import { iconNames } from "lucide-react/dynamic";
import {
  CompoundFormProps,
  FormMethods,
  formMethods,
} from "@/components/compounds/form";
import {
  CompoundFieldProps,
  fieldTypes,
} from "@/components/compounds/field";

export const icon = {
  type: "select",
  options: [
    { label: "none", value: "none" },
    ...iconNames.map((iconName) => ({
      label: iconName,
      value: iconName,
    })),
  ],
} as const;

export const button = {
  type: "object",
  objectFields: {
    label: { type: "text" },
    url: { type: "text" },
    variant: {
      type: "select",
      options: [
        { label: "primary", value: "default" },
        { label: "secondary", value: "secondary" },
        { label: "outline", value: "outline" },
        { label: "ghost", value: "ghost" },
        { label: "link", value: "link" },
        { label: "destructive", value: "destructive" },
      ],
    },
    size: {
      type: "select",
      options: [
        { label: "default", value: "default" },
        { label: "sm", value: "sm" },
        { label: "lg", value: "lg" },
        { label: "icon", value: "icon" },
      ],
    },
    icon,
  },
} as const;

const buttonDefaults = {
  label: "Button",
  url: "",
  variant: "default",
  size: "default",
  icon: "none",
} as const;

export const buttons = {
  type: "array",
  max: 3,
  // TODO: Why can index be undefined for array types?
  getItemSummary: (item: { label?: string }, index = 0) =>
    item.label || `Button ${index + 1}`,
  arrayFields: {
    ...button.objectFields,
  },
  defaultItemProps: buttonDefaults,
  ai: {
    instructions: "Buttons must use the same size",
  },
} as const;

export const badge = {
  type: "object",
  objectFields: {
    label: { type: "text" },
    url: { type: "text" },
    variant: {
      type: "select",
      options: [
        { label: "default", value: "default" },
        { label: "secondary", value: "secondary" },
        { label: "destructive", value: "destructive" },
        { label: "outline", value: "outline" },
      ],
    },
  },
} as const;

export const image = {
  type: "object",
  objectFields: {
    src: { type: "text", ai: { stream: false } },
    alt: { type: "text" },
  },
} as const;

export const getPlaceholderImageUrl = (
  size: string,
  text = "Placeholder Image"
) =>
  `https://dummyimage.com/${size}/f5f4f4/101010.png&text=${encodeURIComponent(
    text
  )}`;

export const image16x9Placeholder = {
  alt: "16/9 aspect ratio accessible description of the image",
  src: getPlaceholderImageUrl("1920x1080"),
};

export const image1x1Placeholder = {
  alt: "1/1 aspect ratio An accessible description of the image",
  src: getPlaceholderImageUrl("1000x1000"),
};

export const image9x16Placeholder = {
  alt: "9/16 accessible description of the image",
  src: getPlaceholderImageUrl("1080x1920"),
};

export const images = {
  type: "array",
  max: 10,
  // TODO: Why can index be undefined for array types?
  //  Also would be nice for the summary to default to <LABEL + INDEX>
  getItemSummary: (item: { alt?: string }, index = 0) => {
    if (item.alt) {
      return `${item.alt.slice(0, 12)}${item.alt.length > 12 ? "..." : ""}`;
    }

    return `Image ${index + 1}`;
  },
  arrayFields: {
    ...image.objectFields,
  },
  defaultItemProps: image16x9Placeholder,
} as const;

export const paddingLevel = {
  type: "select",
  options: [
    { label: "none", value: "none" },
    { label: "small", value: "small" },
    { label: "medium", value: "medium" },
    { label: "large", value: "large" },
  ],
  ai: {
    instructions: "Never select none as an option",
  },
} as const;

export const padding = {
  type: "object",
  objectFields: {
    top: paddingLevel,
    bottom: paddingLevel,
  },
  ai: {
    exclude: true,
  },
  // TODO: Would be nice to be able to set default values for objects - doing this at the component level for now
} as const;

export const paddingDefaults = {
  top: "medium",
  bottom: "medium",
} as const;

export const heading = {
  type: "text",
  contentEditable: true,
} as const;

export const description = {
  type: "textarea",
  contentEditable: true,
} as const;

export const features = {
  type: "array",
  max: 5,
  getItemSummary: (item: { name?: string }, index = 0) =>
    item.name || `Feature ${index + 1}`,
  arrayFields: {
    icon,
    name: { type: "text", contentEditable: true },
    description: { type: "textarea", contentEditable: true },
  },
  defaultItemProps: {
    icon: "check",
    name: "Feature name",
    description: "Description of the feature",
  },
} as const;

export const contentFields = {
  heading,
  description,
  badge,
  buttons,
} as const;

export const contentFieldsWithFeatures = {
  heading,
  description,
  badge,
  features,
  buttons,
} as const;

export const card = {
  type: "object",
  objectFields: {
    icon,
    heading,
    description,
    button,
  },
} as const;

export const cards = {
  type: "array",
  getItemSummary: (item: { heading?: string }, index = 0) =>
    item.heading || `Card ${index + 1}`,
  arrayFields: {
    ...card.objectFields,
  },
  defaultItemProps: {
    icon: "activity",
    heading: "Heading",
    description: "Description",
    button: buttonDefaults,
  },
} as const;

export const field: Field<CompoundFieldProps> = {
  type: "object",
  objectFields: {
    label: { type: "text", contentEditable: true },
    name: { type: "text" },
    type: {
      type: "select",
      options: fieldTypes.map((field) => ({ label: field, value: field })),
    },
  },
};

export const fieldDefaults: CompoundFieldProps = {
  label: "Field Label",
  type: "text",
  name: "field_name",
};

const { url, ...formButtonConfig } = button.objectFields;

export const form: Field<CompoundFormProps> = {
  type: "object",
  objectFields: {
    title: { type: "text", contentEditable: true },
    fields: {
      type: "array",
      min: 1,
      max: 10,
      arrayFields: { ...field.objectFields },
      getItemSummary: (item: { label?: string }, index = 0) =>
        item.label || `Field ${index + 1}`,
      defaultItemProps: fieldDefaults,
    },
    action: { type: "text", label: "submit url" },
    method: {
      type: "select",
      label: "submit method",
      options: formMethods.map((method) => ({ label: method, value: method })),
    },
    button: {
      ...button,
      objectFields: {
        ...formButtonConfig,
      },
    },
  },
};

export const formDefaults: CompoundFormProps = {
  title: "Book a meeting",
  fields: [
    { label: "First name", type: "text", name: "first_name" },
    { label: "Last name", type: "text", name: "last_name" },
    { label: "Resume", type: "file", name: "resume" },
  ],
  action: "/submit-form",
  method: "post" as FormMethods,
  button: {
    label: "Book the meeting",
    variant: "default",
    size: "default",
    icon: "move-right",
  },
};
