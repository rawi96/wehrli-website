import { global } from "@/data/global";

export type Props = {
  size?: "s" | "l";
};

export const OpeningHours = ({ size = "s" }: Props) => {
  return (
    <span
      className={`${size === "s" && "text-sm leading-6"} text-center leading-6`}
    >
      <div className="mb-4">
        {global.openingHours.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      {global.closingHours.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </span>
  );
};
