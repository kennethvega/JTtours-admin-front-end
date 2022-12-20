type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className=" flexoverflow-hidden  border border-gray-200 shadow mx-auto max-w-[30rem] bg-white rounded">{children}</div>;
};

export default Card;
