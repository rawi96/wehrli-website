import { Button } from "./button";

type Props = {
  title: string;
  button1: {
    text: string;
    link: string;
  };
  button2: {
    text: string;
    link: string;
  };
};

export const Feedback = ({ title, button1, button2 }: Props) => (
  <>
    <div className="text-center">
      <h2 className="text-2xl font-bold tracking-tight text-wehrli">{title}</h2>
      <div className="mb-20 mt-10 flex items-center justify-center gap-x-4">
        <Button type="primary" text={button1.text} href={button1.link} />
        <Button type="quaternary" text={button2.text} href={button2.link} />
      </div>
    </div>
  </>
);
