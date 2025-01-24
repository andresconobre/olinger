import React from "react";
import Button from "../components/Button";
import ProductsHome from "./ProductsHome";
import Companies from "./Companies";
import Qualities from "./Qualities/Qualities";

const Home = () => {
  return (
    <>
      <section className="container py-12 font-DM-Sans">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 flex flex-col items-start gap-6 lg:gap-14">
            <div className="flex flex-col gap-4">
              <p className="uppercase text-[10px] text-blue-olinger-c12">
                Uniformes personalizados para sua empresa.
              </p>
              <h2 className="font-bold text-[40px] leading-[48px] text-blue-olinger-c12">
                Vista a identidade da sua marca com elegância e
                profissionalismo!
              </h2>
              <p className="text-sm text-gray-olinger-c11">
                Na Olinger, entendemos que cada empresa é única, e seu uniforme
                é mais do que uma simples vestimenta - é a representação
                tangível da sua marca, cultura e profissionalismo.
              </p>
            </div>
            <Button arrow>Fazer orçamento</Button>
          </div>
          <div className="lg:col-span-7 flex group gap-4 h-52 md:h-[420px]">
            <div className="transition-[flex] ease-in-out duration-700 group-hover:[&:not(:hover)]:flex-1 hover:flex-[3] flex-[4]">
              <img
                src="/img/home-img-1.jpeg"
                alt="Exemplo"
                className="w-full h-full object-cover rounded-lg transition duration-500 ease-in"
              />
            </div>
            <div className="transition-[flex] ease-in-out duration-700 group-hover:[&:not(:hover)]:flex-1 hover:flex-[3] flex-[2]">
              <img
                src="/img/home-img-2.jpeg"
                alt="Exemplo"
                className="w-full h-full object-cover rounded-lg transition duration-500 ease-in"
              />
            </div>
            <div className="transition-[flex] ease-in-out duration-700 group-hover:[&:not(:hover)]:flex-1 hover:flex-[3] flex-1">
              <img
                src="/img/home-img-3.jpeg"
                alt="Exemplo"
                className="w-full h-full object-cover rounded-lg transition duration-500 ease-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <Companies/> */}
      <ProductsHome/>
      <Qualities/>
    </>
  );
};

export default Home;
