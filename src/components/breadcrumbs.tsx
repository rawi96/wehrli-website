import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export type Props = {
  pages: {
    name: string;
    href: string;
  }[];
};

export const Breadcrumbs = ({ pages }: Props) => (
  <nav className="mb-10 flex justify-center" aria-label="Breadcrumb">
    <ol
      role="list"
      className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
    >
      <li>
        <Link href="/" className="text-gray-400 hover:text-gray-500">
          <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
          <span className="sr-only">Home</span>
        </Link>
      </li>
      {pages.map((page) => (
        <li key={page.name}>
          <div className="flex items-center">
            <ChevronRightIcon
              className="hidden h-5 w-5 flex-shrink-0 text-gray-400 sm:block"
              aria-hidden="true"
            />
            <Link
              href={page.href}
              className="text-sm font-medium text-gray-500 underline hover:text-gray-700 sm:ml-4"
            >
              {page.name}
            </Link>
          </div>
        </li>
      ))}
    </ol>
  </nav>
);
