import { cn } from "../../lib/utils";

export interface CompoundImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export const CompoundImage = (props: CompoundImageProps) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={cn("w-full object-cover block", props.className)}
    />
  );
};
