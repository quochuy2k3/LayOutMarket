import React from 'react';

interface Item {
  name: string;
  img: string;
  description: string;
}

interface ItemProps {
  item: Item;
}

const ItemComponent: React.FC<ItemProps> = ({ item }) => {
  return (
    <div
      key={item.name}
      className="bg-[#ddd6d6c5] p-5 rounded-xl flex flex-col items-center justify-center"
    >
      <img
        src={item.img}
        alt={item.name}
        className="h-auto max-w-[100px] rounded-t-xl"
      />
      <button className="font-semibold text-sm rounded-full bg-white py-1 px-5 my-5">
        {item.name}
        </button>
      <p className="text-xs">{item.description}</p>
    </div>
  );
};

export default ItemComponent;