"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];          // SKU images
  fallbackImage: string;     // Product thumbnail
};

export default function ProductGallery({
  images,
  fallbackImage,
}: Props) {
  const galleryImages = images.length > 0 ? images : [fallbackImage];

  const [activeImage, setActiveImage] = useState(galleryImages[0]);

  // Reset active image when SKU changes
  useEffect(() => {
    setActiveImage(galleryImages[0]);
  }, [images]);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-surface">
        <Image
          src={activeImage}
          alt="Product image"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto">
        {galleryImages.map((img) => (
          <button
            key={img}
            onClick={() => setActiveImage(img)}
            className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border transition
              ${
                activeImage === img
                  ? "border-primary ring-2 ring-primary/40"
                  : "border-border hover:border-primary/50"
              }`}
          >
            <Image
              src={img}
              alt="Thumbnail"
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
