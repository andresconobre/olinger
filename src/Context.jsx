import React, { createContext, useState } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
  const [productsData, setProductsData] = useState([
    {
      img: "/img/social/img-1.png",
      name: "Social",
      // cardDetails: "Algodão, Poliéster, Chambray, Linho, Tricoline.",
      link: "social",
      description:
        "Eleve a imagem da sua equipe com nossas camisas sociais para uniformes corporativos, que combinam sofisticação, conforto e funcionalidade. Confeccionadas com tecidos premium e proteção UV, nossas camisas oferecem um ajuste impecável para transmitir profissionalismo e elegância no ambiente de trabalho. Escolha qualidade, e praticidade para o dia a dia corporativo!",
      total: 28,
      colors: [],
    },
    {
      img: "/img/camisas-polo/img-1.png",
      name: "Camisas Polo",
      // cardDetails: "Algodão, Poliéster, Chambray, Linho, Tricoline.",
      link: "camisas-polo",
      description:
        "A camisa polo é uma das opções mais populares para uniformes corporativos devido ao seu design profissional e confortável. Elas oferecem um equilíbrio entre elegância e casualidade, tornando-as ideais para diversas áreas de trabalho. \nA malha piquet é uma das escolhas mais tradicionais para camisas polo, podendo ser confeccionado também em malha de poliviscose, oferecendo um tecido macio e prático. \nInovando no mercado temos o tecido Piquet Light garantindo conforto, qualidade e durabilidade. \nPersonalização com bordado e serigrafia.",
      total: 39,
      colors: [
        { name: "Cinza Mesclado", hex: null, image: "cinza-mesclado" },
        { name: "Royal Mescla", hex: null, image: "royal-mescla" },
        { name: "Caqui Mescla", hex: null, image: "caqui-mescla" },
        { name: "Vermelho Mescla", hex: null, image: "vermelho-mescla" },
        { name: "Preto Mescla", hex: null, image: "preto-mescla" },
        { name: "Marinho Mescla", hex: null, image: "marinho-mescla" },
        { name: "Atlântico Mescla", hex: null, image: "atlantico-mescla" },
        { name: "Bordeaux Mescla", hex: null, image: "bordeaux-mescla" },
        { name: "PA Branca", hex: null, image: "pa-branca" },
        { name: "Amarelo Banco do Brasil", hex: "#ffcf0f", image: null },
        { name: "Laranja Escuro", hex: "#b51f27", image: null },
        { name: "Vermelho", hex: "#b51f27", image: null },
        { name: "Pink", hex: "#e16c98", image: null },
        { name: "Rosa BB", hex: "#f9c7d8", image: null },
        { name: "Royal", hex: "#005794", image: null },
        { name: "Turquesa", hex: "#009fc3", image: null },
        { name: "Azul Céu", hex: "#008bba", image: null },
        { name: "Azul BB", hex: "#a1bfd9", image: null },
        { name: "Chumbo", hex: "#646a6b", image: null },
        { name: "Areia", hex: "#9db3bb", image: null },
        { name: "Verde Lafite", hex: "#2e443c", image: null },
        { name: "Verde Bandeira", hex: "#1a966c", image: null },
        { name: "Verde Limão", hex: "#c8e163", image: null },
        { name: "Verde BB", hex: "#aedcc4", image: null },
        { name: "Gesso", hex: "#cdc8bc", image: null },
        { name: "Creme", hex: "#f7f2e2", image: null },
        { name: "Preto", hex: "#2b2625", image: null },
        { name: "Branco", hex: "#ececee", image: null },
        { name: "Prata", hex: "#aab1af", image: null },
      ],
    },
    {
      img: "/img/moletons/img-1.png",
      name: "Moletons",
      // cardDetails: "Algodão, Poliéster, Chambray, Linho, Tricoline.",
      link: "moletons",
      description:
        "O moletom é a escolha perfeita para unir conforto e informalidade com a identidade corporativa. Confeccionado com tecidos macios de poliéster e polialgodão, que oferece aconchego e ótima durabilidade. Atende tanto equipes corporativas quanto escolares.",
      total: 7,
      colors: [],
    },
    {
      img: "/img/jaquetas/img-1.png",
      name: "Jaquetas",
      // cardDetails: "Algodão, Poliéster, Chambray, Linho, Tricoline.",
      link: "jaquetas",
      description:
        "A jaqueta combina funcionalidade, conforto e estilo, ideal para representar a identidade da sua equipe com profissionalismo. Fabricada com materiais de alta qualidade, com tecido 100% poliéster repelente a água, ela oferece excelente durabilidade, com proteção UV mesmo em uso diário e intenso.",
      total: 11,
      colors: [],
    },
    {
      img: "/img/home-img-1.jpeg",
      name: "Camisetas",
      // cardDetails: "Algodão, Poliéster, Chambray, Linho, Tricoline.",
      link: "camisetas",
      description:
        "As camisetas oferecem uma combinação perfeita entre conforto, durabilidade e profissionalismo. Fabricadas com tecidos de alta qualidade, como poliviscose, algodão e polialgodão, que garantem resistência, maciez e respirabilidade, mesmo em jornadas longas. \n\nSeja para uniformizar sua equipe ou marcar presença em um evento, nossas camisetas são a escolha certa. Deixe sua marca com estilo e conforto!",
      total: 0,
      colors: [
        { name: "Cinza Mesclado", hex: null, image: "cinza-mesclado" },
        { name: "Royal Mescla", hex: null, image: "royal-mescla" },
        { name: "Caqui Mescla", hex: null, image: "caqui-mescla" },
        { name: "Vermelho Mescla", hex: null, image: "vermelho-mescla" },
        { name: "Preto Mescla", hex: null, image: "preto-mescla" },
        { name: "Marinho Mescla", hex: null, image: "marinho-mescla" },
        { name: "Atlântico Mescla", hex: null, image: "atlantico-mescla" },
        { name: "Bordeaux Mescla", hex: null, image: "bordeaux-mescla" },
        { name: "PA Branca", hex: null, image: "pa-branca" },
        { name: "Branco", hex: "#ececee", image: null },
        { name: "Pink", hex: "#e16c98", image: null },
        { name: "Creme", hex: "#f7f2e2", image: null },
        { name: "Areia", hex: "#9db3bb", image: null },
        { name: "Verde BB", hex: "#aedcc4", image: null },
        { name: "Azul BB", hex: "#a1bfd9", image: null },
        { name: "Caqui", hex: "#ab9d73", image: null },
        { name: "Rosa BB", hex: "#f9c7d8", image: null },
        { name: "Amarelo BB", hex: "#fbeeb9", image: null },
        { name: "Preto", hex: "#2b2625", image: null },
        { name: "Verde Bandeira", hex: "#1a966c", image: null },
        { name: "Verde Militar", hex: "#615e44", image: null },
        { name: "Vermelho", hex: "#b51f27", image: null },
        { name: "Vermelho Escuro", hex: "#c51e30", image: null },
        { name: "Turquesa", hex: "#009fc3", image: null },
        { name: "Verde Lafite", hex: "#2e443c", image: null },
        { name: "Royal", hex: "#005794", image: null },
        { name: "Chumbo", hex: "#646a6b", image: null },
        { name: "Azul Céu", hex: "#008bba", image: null },
        { name: "Bordô", hex: "#6f253d", image: null },
        { name: "Amarelo Cítrico", hex: "#ffe247", image: null },
        { name: "Amarelo Ouro", hex: "#ffad26", image: null },
        { name: "Pistache", hex: "#b0c78a", image: null },
        { name: "Verde Limão", hex: "#c8e163", image: null },
        { name: "Laranja", hex: "#ff7f35", image: null },
        { name: "Marinho Forte", hex: "#283045", image: null },
        { name: "Amarelo Banco do Brasil", hex: "#ffcf0f", image: null },
        { name: "Laranja Escuro", hex: "#b51f27", image: null },
        { name: "Lilás E.V.A.", hex: "#7f83b3", image: null },
        { name: "Lilás Claro", hex: "#5b4c84", image: null },
        { name: "Vinho", hex: "#4a3859", image: null },
        { name: "Lilás", hex: "#c8cce0", image: null },
        { name: "Báltico", hex: "#008095", image: null },
        { name: "Verde Claro", hex: "#8d997b", image: null },
        { name: "Verde", hex: "#00765f", image: null },
        { name: "Cinza STZ", hex: "#cdc8bc", image: null },
        { name: "Prata", hex: "#aab1af", image: null },
        { name: "Marfim", hex: "#e5dbc0", image: null },
        { name: "Marrom Café", hex: "#57483a", image: null },
        { name: "Rosa", hex: "#f9ddde", image: null },
      ],
    },
  ]);

  function redirectToWhatsApp(item, colorsArray = []) {
    const numbers = [5542991521045, 5542999715736];

    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    // Concatena as cores, se o array existir e não estiver vazio
    const colorsString =
      Array.isArray(colorsArray) && colorsArray.length > 0
        ? ` ${colorsArray.length > 1 ? 'das cores' : 'da cor'} ${colorsArray.join(
            ", "
          )}.`
        : ".";

    const message = `Olá, vim do site da Olinger e tenho interesse em fazer um orçamento.` + `${item ? ` Possuo interesse em ${item}${colorsString}` : ''}`

    const whatsappUrl = `https://wa.me/${randomNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <Context.Provider
      value={{
        productsData,
        setProductsData,
        redirectToWhatsApp
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
