import Image from "next/image";

type Props = {
  title: string;
  imageUrl: string;
  items: string[];
};

export const ServiceTeaser = ({ title, imageUrl, items }: Props) => (
  <div className="mb-20 grid grid-cols-1 rounded-lg bg-wehrli p-8 md:grid-cols-3 md:gap-12">
    <div className="col-start-1 row-start-1 mx-auto my-8 place-self-center md:mx-0 md:my-0">
      <figure className="contents h-auto min-h-fit w-full">
        <Image
          src={imageUrl}
          width={1000}
          height={1000}
          sizes="(min-width: 1024px) 1000px, 100vw"
          alt={title}
          className="rounded-lg bg-opacity-50 transition"
        />
      </figure>
    </div>
    <div className="col-span-2 flex flex-col justify-center text-white">
      <div>
        <h2 className="mb-4 text-2xl font-bold lg:mb-8">{title}</h2>
        <ul className="ml-3 list-disc font-semibold">
          {items.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
