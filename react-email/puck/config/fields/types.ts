import { Fields, DefaultComponentProps } from "@measured/puck";

export type FieldResolver<FieldProps> = <
  ComponentProps extends DefaultComponentProps,
>(
  fieldProps: FieldProps,
  fields: Fields<ComponentProps>,
) => Fields<ComponentProps>;
