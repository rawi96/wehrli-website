import Image from "next/image";

type Props = {
  teamMembers: {
    name: string;
    imageUrl: string;
    role: string;
    bio: string;
  }[];
};

export const Team = ({ teamMembers }: Props) => (
  <ul
    role="list"
    className="mx-auto my-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
  >
    {teamMembers.map((person) => (
      <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
        <Image
          className="aspect-[4/5] w-52 flex-none rounded-lg object-cover"
          src={person.imageUrl}
          width={416}
          height={520}
          sizes="(min-width: 1024px) 416px, 100vw"
          alt={person.imageUrl}
        />
        <div className="flex-auto">
          <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
            {person.name}
          </h3>
          <p className="text-base leading-7 text-gray-600">{person.role}</p>
          <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
        </div>
      </li>
    ))}
  </ul>
);
