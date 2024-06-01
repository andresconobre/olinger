import React from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
  const cardsData = [
    {
      img: "/img/social.png",
      name: "Social",
      description: "Algodão, Poliéster, Chambray, Linho, Tricoline.",
      link: "",
    },
    {
      img: "/img/polo.png",
      name: "Camisas Polo",
      description: "Algodão, Poliéster, Chambray, Linho, Tricoline.",
      link: "",
    },
    {
      img: "/img/moletom.png",
      name: "Moletons",
      description: "Algodão, Poliéster, Chambray, Linho, Tricoline.",
      link: "",
    },
    {
      img: "/img/jaqueta.png",
      name: "Jaquetas",
      description: "Algodão, Poliéster, Chambray, Linho, Tricoline.",
      link: "",
    },
    {
      img: "/img/home-img-1.png",
      name: "Camisetas",
      description: "Algodão, Poliéster, Chambray, Linho, Tricoline.",
      link: "",
    },
  ];
  return (
    <section className="py-12 md:py-24 bg-olinger-footer bg-no-repeat bg-center bg-cover font-DM-Sans">
      <div className="container">
        <h2 className="font-semibold text-[32px]/9 text-blue-olinger-c12 relative inline-block after:absolute after:h-1 after:w-1/2 after:bg-blue-olinger-c7 after:rounded after:-bottom-3 after:left-0">
          Produtos
        </h2>
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {cardsData.map((data, index) => (
            <ProductCard data={data} key={index} />
          ))}
        </div>
        <Link className="flex items-center justify-end text-sm text-blue-olinger-c12 hover:underline hover:underline-offset-2 hover:decoration-1">Ver todos</Link>
      </div>
    </section>
  );
};

export default Products;
