import Link from "next/link";
import { MouseEvent } from "react";

type Props = {
  text: string;
  href?: string;
  onClick?: (event?: MouseEvent<Element>) => void;
  type: "primary" | "secondary" | "tertiary" | "quaternary";
  disabled?: boolean;
  fullWidth?: boolean;
};

const classNamesMap = {
  primary: "bg-wehrli text-white hover:bg-wehrli-600 shadow-sm",
  secondary: "bg-white text-wehrli hover:bg-gray-200 shadow-sm",
  tertiary: "text-white hover:underline",
  quaternary: "text-black hover:underline",
};

const ButtonLink = ({ href, text, type, fullWidth }: Props) => (
  <Link
    href={href!}
    className={`${fullWidth ? "w-full" : ""} rounded-lg px-3.5 py-1.5 text-base font-semibold leading-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wehrli-400 ${classNamesMap[type]}`}
  >
    {text}{" "}
    {type === "tertiary" || type === "quaternary" ? (
      <span aria-hidden="true">→</span>
    ) : (
      ""
    )}
  </Link>
);

const ButtonClick = ({ onClick, text, type, fullWidth }: Props) => (
  <button
    onClick={onClick}
    className={`${fullWidth ? "w-full" : ""} rounded-lg px-3.5 py-1.5 text-base font-semibold leading-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wehrli-400 ${classNamesMap[type]}`}
  >
    {text}{" "}
    {type === "tertiary" || type === "quaternary" ? (
      <span aria-hidden="true">→</span>
    ) : (
      ""
    )}
  </button>
);

export const Button = ({ text, href, onClick, type, fullWidth }: Props) => {
  const isLink = !!href;

  return (
    <>
      {isLink ? (
        <ButtonLink href={href} type={type} text={text} fullWidth={fullWidth} />
      ) : (
        <ButtonClick
          onClick={onClick}
          type={type}
          text={text}
          fullWidth={fullWidth}
        />
      )}
    </>
  );
};
