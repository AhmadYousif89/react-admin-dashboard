type HeadingProps = {
  title: string;
  subTitle: string;
};

export const Heading = ({ title, subTitle }: HeadingProps) => {
  return (
    <div className="my-12">
      <h1 className="mb-4 text-4xl uppercase tracking-wide text-base-color">
        {title}
      </h1>
      <p className="text-2xl capitalize text-second">{subTitle}</p>
    </div>
  );
};
