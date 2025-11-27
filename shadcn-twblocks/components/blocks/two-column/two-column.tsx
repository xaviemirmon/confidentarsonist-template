import { registerOverlayPortal } from "@measured/puck";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  CompoundContainer,
  CompoundContainerProps,
} from "@/components/compounds/container";
import {
  CompoundContent,
  CompoundContentProps,
} from "@/components/compounds/content";

import {
  CompoundImage,
  CompoundImageProps,
} from "@/components/compounds/image";

type ImageWithAspectRatio = CompoundImageProps & {
  aspectRatio?: "16x9" | "1x1";
};

export interface TwoColumnProps extends CompoundContentProps {
  padding?: CompoundContainerProps["padding"];
  layout?: "text-start" | "text-end";
  images?: ImageWithAspectRatio[];
  border?: "true" | "false";
}

export const TwoColumn = ({
  padding,
  layout,
  border = "false",
  badge,
  heading,
  description,
  features,
  buttons,
  images,
}: TwoColumnProps) => {
  const hasSingleImage = Array.isArray(images) && images.length === 1;
  const hasMultipleImages = Array.isArray(images) && images.length > 1;

  return (
    <CompoundContainer padding={padding}>
      <div
        className={cn("flex gap-10 lg:items-center", {
          "flex-col lg:flex-row": layout === "text-start",
          "flex-col-reverse lg:flex-row-reverse": layout === "text-end",
          "border border-muted p-4 lg:p-8 rounded-md": border === "true",
        })}
      >
        <CompoundContent
          badge={badge}
          heading={heading}
          description={description}
          features={features}
          buttons={buttons}
          alignContent="start"
          className={cn({
            "lg:ps-10": layout === "text-end",
            "lg:pe-10": layout === "text-start",
          })}
        />
        <div
          className="flex flex-col items-center"
          // For some reason using "grow shrink-0 basis-1/2" or "flex-[1_0_50%]" doesn't work
          style={{ flexGrow: 1, flexShrink: 0, flexBasis: "40%" }}
        >
          {hasSingleImage ? <ColumnImage {...images[0]} /> : null}
          {hasMultipleImages ? (
            <div className="w-full max-w-full px-6">
              <Carousel>
                <CarouselPrevious ref={registerOverlayPortal} />
                <CarouselContent>
                  {images?.map((image, index) => (
                    <CarouselItem key={index}>
                      <ColumnImage
                        src={image.src}
                        alt={image.alt}
                        aspectRatio={image.aspectRatio}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext ref={registerOverlayPortal} />
              </Carousel>
            </div>
          ) : null}
        </div>
      </div>
    </CompoundContainer>
  );
};

const ColumnImage = (props: ImageWithAspectRatio & { className?: string }) => (
  <div
    className={cn(
      "bg-muted rounded-md w-full",
      {
        "aspect-video h-full": props.aspectRatio === "16x9",
        "aspect-square": props.aspectRatio === "1x1",
      },
      props.className
    )}
  >
    <CompoundImage src={props.src} alt={props.alt} className="h-full" />
  </div>
);
