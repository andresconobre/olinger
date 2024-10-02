import React from "react";
import Button from "./Button";

const ProductCard = ({ data: {img, name, cardDetails, link} }) => {
  return (
    <div className="p-4 flex flex-col gap-4 rounded-lg bg-white border border-blue-olinger-c4 shadow-card">
      <figure className="h-72 lg:h-52 rounded overflow-hidden">
        <img
          src={img}
          alt={`Imagem do produto ${name}`}
          className="w-full h-full object-cover rounded transition-all md:hover:scale-110 duration-500"
        />
      </figure>
      <div className="flex flex-col gap-[7px]">
        <h6 className="text-2xl font-semibold text-blue-olinger-c12">
          {name}
        </h6>
        <p className="text-sm text-gray-olinger-c9">{cardDetails}</p>
      </div>
      <Button to={`/produtos/${link}`} light>Detalhes</Button>
    </div>
  );
};

export default ProductCard;
