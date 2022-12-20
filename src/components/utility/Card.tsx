type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className=" flexoverflow-hidden  border border-gray-200 shadow mx-auto w-full bg-white rounded">{children}</div>;
};

export default Card;
