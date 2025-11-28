import { ObjectField } from "@measured/puck";

export type SectionTextFieldProps = {
  tag: string;
  title: string;
  description: string;
};

export const defaultSectionTextValue: SectionTextFieldProps = {
  tag: "Tagline",
  title: "Title",
  description: "Description",
};

const sectionTextField: ObjectField<SectionTextFieldProps> = {
  type: "object",
  objectFields: {
    tag: { type: "text", contentEditable: true },
    title: { type: "text", contentEditable: true },
    description: { type: "textarea", contentEditable: true },
  },
};

export default sectionTextField;
