import React from "react";

const QualityCard = ({ quality, ...props }) => {
  return (
    <div className="flex flex-col md:basis-1/3 gap-3" {...props}>
      <div className="flex items-center gap-3">
        <figure className="w-10 h-10 grid place-items-center bg-blue-olinger-c2 rounded">
          <img
            src={`/img/${quality.img}-icon.svg`}
            alt={`Ícone de ${quality.title}`}
            className="object-contain"
          />
        </figure>
        <h4 className="font-semibold text-2xl/none text-blue-olinger-c12">
          {quality.title}
        </h4>
      </div>
      <p className="text-sm text-gray-olinger-c10">{quality.description}</p>
    </div>
  );
};

export default QualityCard;
