
interface CardProps {
  title: string;
  price: number;
}

const Card = ({ title, price }: CardProps) => {
  return (
    <div className="border border-red-200 h-[500px] w-72 rounded-md shadow-xl">
      <div className="h-1/4 bg-emerald-400 flex justify-center items-center">
        <title className="text-2xl">{title}</title>
      </div>
      <div className="flex justify-center items-center h-[75%]">
        <p className="text-5xl">
          {price} <span>€</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;
