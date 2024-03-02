type Props = {
  title: string;
  intro?: string;
};

export const TitleSection = ({ title, intro }: Props) => {
  return (
    <div className="text-center">
      <h2
        className="text-3xl font-bold tracking-tight text-wehrli sm:text-4xl"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>

      <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
        {intro}
      </p>
    </div>
  );
};
