import React from "react";
import Button from "./Button";

const ProductCard = ({ data }) => {
  return (
    <div className="p-4 flex flex-col gap-4 rounded-lg bg-white border border-blue-olinger-c4 shadow-card">
      <img
        src={data.img}
        alt={`Imagem do produto ${data.name}`}
        className="w-full h-72 lg:h-52 object-cover rounded"
      />
      <div className="flex flex-col gap-[7px]">
        <h6 className="text-2xl font-semibold text-blue-olinger-c12">
          {data.name}
        </h6>
        <p className="text-sm text-gray-olinger-c9">{data.description}</p>
      </div>
      <Button light>Orçamento</Button>
    </div>
  );
};

export default ProductCard;
