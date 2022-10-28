interface Props {
  children?: React.ReactNode;
  className?: string;
}
export const Card = ({ className, children }: Props) => {
  return (
    <div
      className={`${className} rounded-md bg-card p-6 shadow-md drop-shadow-md`}>
      {children}
    </div>
  );
};
