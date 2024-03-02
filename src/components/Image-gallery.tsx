import Image from "next/image";

type Props = {
  images: { src: string; altText: string }[];
};

export const ImageGallery = ({ images }: Props) => (
  <div className="mb-20 grid grid-cols-2 items-center gap-4 md:grid-cols-3">
    {images.map((image, index) => (
      <div key={index}>
        <Image
          className="h-auto max-w-full rounded-lg"
          src={image.src}
          alt={image.altText}
          width={1000}
          height={1000}
          sizes="(min-width: 1024px) 1000px, 100vw"
        />
      </div>
    ))}
  </div>
);
