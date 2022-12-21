type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className="border -mt-1 border-gray-200 mx-auto bg-white rounded">{children}</div>;
};

export default Card;
