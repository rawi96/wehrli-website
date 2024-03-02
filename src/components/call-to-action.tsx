import { ReactNode } from "react";
import { ContentContainer } from "./content-container";
import { Navigation } from "./navigation/navigation";

type Props = {
  title?: string;
  children: ReactNode;
};

export const CallToAction = ({ title }: Props) => (
  <>
    <div className="mb-20 bg-wehrli">
      <div className="px-6 lg:px-8">
        <Navigation />
      </div>
    </div>
    <ContentContainer>
      {title && (
        <h1
          className="text-4xl pb-16 font-bold tracking-tight text-wehrli-500"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
      )}
    </ContentContainer>
  </>
);