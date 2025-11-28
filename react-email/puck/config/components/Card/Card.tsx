import CardInternal, { CardType, CardVariant } from "@/puck/components/card";
import { LinkFieldProps } from "@/puck/config/fields/link";
import { ImageFieldProps } from "@/puck/config/fields/image";

export type CardProps = {
  type: CardType;
  image: ImageFieldProps;
  title: string;
  description: string;
  tag: string;
  price?: string;
  button: LinkFieldProps;
  variant: CardVariant;
};

const Card = (props: CardProps) => {
  return (
    <CardInternal
      type={props.type}
      variant={props.variant}
      image={{ src: props.image.src, alt: props.image.alt }}
      tag={props.tag}
      title={props.title}
      description={props.description}
      price={props.price}
      button={{
        href: props.button.href,
        label: props.button.label,
        icon: props.button.icon,
      }}
    />
  );
};

export default Card;
