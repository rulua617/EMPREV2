import React from "react";
import { Button } from "@nextui-org/react";
import { itemList } from "./productos_index";
import { Image } from "@nextui-org/react";

export default function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const allImages = itemList[0].imgs;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  return (
    <div div className="flex flex-col items-center gap-5">
      <Image
        alt={itemList[0].title}
        shadow="sm"
        radius="lg"
        width="100%"
        className="w-full object-cover h-[140px]"
        src={allImages[currentImageIndex]}
      />
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="flat"
          color="secondary"
          onClick={previousImage}
        >
          Previous
        </Button>
        <Button size="sm" variant="flat" color="secondary" onClick={nextImage}>
          Next
        </Button>
      </div>
    </div>
  );
}
