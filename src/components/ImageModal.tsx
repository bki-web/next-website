"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
  DialogTitle, // Import DialogTitle
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ImageItem {
  id: number;
  imageSrc: string;
  description: string;
}

const images: ImageItem[] = [
  {
    id: 1,
    imageSrc: "/article1.jpg",
    description: "This is a detailed description for image 1.",
  },
  {
    id: 2,
    imageSrc: "/article1.jpg",
    description: "This is a detailed description for image 2.",
  },
  {
    id: 3,
    imageSrc: "/article1.jpg",
    description: "This is a detailed description for image 3.",
  },
  {
    id: 4,
    imageSrc: "/article1.jpg",
    description: "This is a detailed description for image 4.",
  },
];

export default function ImageModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<ImageItem | null>(null);

  const handleImageClick = (image: ImageItem) => {
    setActiveImage(image);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setActiveImage(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Click to view image</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            onClick={() => handleImageClick(image)}
            className="relative aspect-square overflow-hidden rounded-md cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={image.imageSrc}
              alt={`Image ${image.id}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogOverlay className="fixed inset-0 bg-black/60 backdrop-blur-md" />
        <DialogContent
          className={cn(
            "bg-white/30 backdrop-blur-3xl border border-white/40 p-0 text-white rounded-lg",
            "lg:w-full lg:h-[60vh]",
            "sm:w-full sm:h-full",
            "flex flex-col overflow-hidden"
          )}
        >
            <DialogTitle></DialogTitle>
          
          {activeImage && (
            <div className="flex-1 w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column (Image) */}
              <div className="relative aspect-square md:aspect-auto">
                <Image
                  src={activeImage.imageSrc}
                  alt={`Image ${activeImage.id}`}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Right Column (Description) */}
              <div className="flex flex-col justify-center items-center p-4">
                <h2 className="text-2xl font-semibold mb-2">Description</h2>
                <p className="text-center">{activeImage.description}</p>
              </div>
            </div>
          )}

          {/* Close button */}
          {/* <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-50"
          >
            <X className="h-6 w-6 text-white" />
          </button> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}