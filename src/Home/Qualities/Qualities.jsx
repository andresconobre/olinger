import React from "react";
import QualityCard from "./QualityCard";

const Qualities = ({col}) => {
  const qualities = [
    {
      img: "clock",
      title: "Agilidade na Cotação",
      description:
        "Temos uma equipe ágil e preparada para fornecer a cotação para seus uniformes o mais rápido possível.",
    },
    {
      img: "shield",
      title: "Eficiência na Produção",
      description:
        "Os melhores tecidos, a melhor técnica, o melhor acabamento.",
    },
    {
      img: "handshake",
      title: "Parceria na Negociação",
      description:
        "Formas de pagamentos e prazos flexíveis para podermos fechar um excelente negócio!",
    },
  ];
  return (
    <section className={`font-DM-Sans ${col ? 'py-8' : 'container py-16'}`}>
      <div className={`flex flex-col gap-8 justify-between ${col ? '' : 'md:flex-row'}`}>
        {qualities.map((quality, idx) => (
          <QualityCard quality={quality} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Qualities;
