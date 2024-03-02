import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
};

export const ContentContainer = ({ children }: Props) => (
  <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
);
