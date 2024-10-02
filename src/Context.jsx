import React, { createContext, useState } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
  const [productsData, setProductsData] = useState([
    {
      img: "/img/social/img-1.png",
      name: "Social",
      cardDetails: "Algodão, Poliéster, Chambray, Linho, Tricoline.",
      link: "social",
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae consequuntur veniam a officia asperiores dolorem aliquid eveniet molestiae sit, facere, nemo rerum ab tempore recusandae fuga iusto ipsum nobis ut? Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eos quia dolores magni optio repudiandae obcaecati maxime aut minima doloribus! Ipsum sequi fuga quaerat, facilis sapiente labore. Id, dolorum reprehenderit.',
      total: 28
    },
    {
      img: "/img/camisas-polo/img-1.png",
      name: "Camisas Polo",
      cardDetails: "Algodão, Poliéster, Chambray, Linho, Tricoline.",
      link: "camisas-polo",
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae consequuntur veniam a officia asperiores dolorem aliquid eveniet molestiae sit, facere, nemo rerum ab tempore recusandae fuga iusto ipsum nobis ut? Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eos quia dolores magni optio repudiandae obcaecati maxime aut minima doloribus! Ipsum sequi fuga quaerat, facilis sapiente labore. Id, dolorum reprehenderit.',
      total: 35
    },
    {
      img: "/img/moletons/img-1.png",
      name: "Moletons",
      cardDetails: "Algodão, Poliéster, Chambray, Linho, Tricoline.",
      link: "moletons",
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae consequuntur veniam a officia asperiores dolorem aliquid eveniet molestiae sit, facere, nemo rerum ab tempore recusandae fuga iusto ipsum nobis ut? Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eos quia dolores magni optio repudiandae obcaecati maxime aut minima doloribus! Ipsum sequi fuga quaerat, facilis sapiente labore. Id, dolorum reprehenderit.',
      total: 6
    },
    {
      img: "/img/jaquetas/img-1.png",
      name: "Jaquetas",
      cardDetails: "Algodão, Poliéster, Chambray, Linho, Tricoline.",
      link: "jaquetas",
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae consequuntur veniam a officia asperiores dolorem aliquid eveniet molestiae sit, facere, nemo rerum ab tempore recusandae fuga iusto ipsum nobis ut? Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eos quia dolores magni optio repudiandae obcaecati maxime aut minima doloribus! Ipsum sequi fuga quaerat, facilis sapiente labore. Id, dolorum reprehenderit.',
      total: 9
    },
    {
      img: "/img/home-img-1.jpeg",
      name: "Camisetas",
      cardDetails: "Algodão, Poliéster, Chambray, Linho, Tricoline.",
      link: "camisetas",
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae consequuntur veniam a officia asperiores dolorem aliquid eveniet molestiae sit, facere, nemo rerum ab tempore recusandae fuga iusto ipsum nobis ut? Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eos quia dolores magni optio repudiandae obcaecati maxime aut minima doloribus! Ipsum sequi fuga quaerat, facilis sapiente labore. Id, dolorum reprehenderit.',
      total: 0
    },
  ]);

  return (
    <Context.Provider
      value={{
        productsData,
        setProductsData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
