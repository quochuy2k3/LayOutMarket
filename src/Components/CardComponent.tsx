import React from 'react';

interface Card {
    img: string;
    name: string;
    price: number;
    oldPrice: number;
  }

interface CardProps {
  card: Card;
}

const CardComponent: React.FC<CardProps> = ({ card }) => {
  return (
    <div
    key={card.name}
    className="px-3 flex rounded-xl justify-between items-center border py-4  border-orange-400"
    >
    <div className="flex justify-center items-center">
        <img
        src={card.img}
        alt={card.name}
        className="h-auto max-w-[60px] bg-white rounded-xl p-2 "
        />
        <div className="px-3">
        <h3 className="text-base font-semibold mb-2">
            {card.name}
        </h3>
        <button className="rounded-full bg-white text-sm py-1 px-3">
            Description Options
        </button>
        </div>
    </div>
    <div>
        <p className="text-lg font-semibold">{card.price}.00 USD</p>
        <p className="text-xs line-through">{card.oldPrice}.00 USD</p>
    </div>
    </div>
  );
};

export default CardComponent;