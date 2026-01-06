"use client";

import Image from "next/image";
import { SKU } from "../../lib/constants";

type Props = {
  productImages: string[];
  selectedSku?: SKU;
};

export default function ProductGallery({
  productImages,
  selectedSku,
}: Props) {
  const mainImage = selectedSku?.image ?? productImages[0];

  return (
    <div className="space-y-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl border">
        <Image
          src={mainImage}
          alt="Product image"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex gap-3">
        {(selectedSku ? [selectedSku.image] : productImages).map((img) => (
          <div
            key={img}
            className="relative h-20 w-20 overflow-hidden rounded-lg border"
          >
            <Image
              src={img}
              alt="Thumbnail"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
