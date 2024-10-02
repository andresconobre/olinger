import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import Context from "../Context";

const Products = () => {
  const { productsData } = useContext(Context);
  
  return (
    <section className="py-12 md:py-24 bg-olinger-footer bg-no-repeat bg-center bg-cover font-DM-Sans">
      <div className="container">
        <h2 className="font-semibold text-[32px]/9 text-blue-olinger-c12 relative inline-block after:absolute after:h-1 after:w-1/2 after:bg-blue-olinger-c7 after:rounded after:-bottom-3 after:left-0">
          Produtos
        </h2>
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.slice(0, 4).map((data, index) => (
            <ProductCard data={data} key={index} />
          ))}
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <Link to="produtos" className="text-sm text-blue-olinger-c12 underline md:no-underline hover:underline underline-offset-2">
            Ver todos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
