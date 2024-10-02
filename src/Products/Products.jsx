import React, { useContext } from "react";
import Context from "../Context";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { productsData } = useContext(Context);

  return (
    <section className="container py-12 font-DM-Sans">
      <h2 className="font-semibold text-[32px]/9 text-blue-olinger-c12 relative inline-block after:absolute after:h-1 after:w-1/2 after:bg-blue-olinger-c7 after:rounded after:-bottom-3 after:left-0">
        Produtos
      </h2>
      <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {productsData.map((data, index) => (
            <ProductCard data={data} key={index} />
          ))}
        </div>
    </section>
  );
};

export default Products;
