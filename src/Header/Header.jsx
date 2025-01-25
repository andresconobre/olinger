import React, { useContext } from "react";
import NavItem from "./NavItem";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";
import Context from "../Context";

const Header = () => {
  const { productsData, redirectToWhatsApp } = useContext(Context);

  return (
    <>
      <header>
        <div className="bg-blue-olinger-c2 font-DM-Sans text-black text-xs">
          <div className="container py-4">
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-2">
              <div className="flex items-center gap-1">
                <img
                  src="/img/pin-icon.svg"
                  alt="Ícone de pin"
                  className="w-3 h-3 object-contain"
                />
                <a
                  href="https://maps.app.goo.gl/w7VMrvv15sJ5KKvL8"
                  rel="noreferrer"
                  target="_blank"
                >
                  Avenida Senador Flávio Carvalho Guimarães, 1600
                </a>
              </div>
              <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-0 items-center justify-center md:divide-x md:divide-blue-olinger-c5 md:*:px-4 md:first:*:pl-0 md:last:*:pr-0">
                <a href="tel:4232396250" className="flex items-center gap-1">
                  <img
                    src="/img/phone-icon.svg"
                    alt="Ícone de telefone"
                    className="w-3 h-3 object-contain"
                  />
                  (42) 3239-6250
                </a>
                <a
                  href={`https://wa.me/5542991521045?text=${encodeURIComponent(
                    `Olá, vim do site da Olinger e tenho interesse em fazer um orçamento.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1"
                >
                  <img
                    src="/img/whatsapp-icon.svg"
                    alt="Ícone de telefone"
                    className="w-3 h-3 object-contain"
                  />
                  (42) 99152-1045
                </a>
                <a
                  href={`https://wa.me/5542999715736?text=${encodeURIComponent(
                    `Olá, vim do site da Olinger e tenho interesse em fazer um orçamento.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1"
                >
                  <img
                    src="/img/whatsapp-icon.svg"
                    alt="Ícone de telefone"
                    className="w-3 h-3 object-contain"
                  />
                  (42) 99971-5736
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-blue-olinger-c3 py-5">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-3">
              <Link to="/">
                <img
                  src="/img/logo-olinger-blue.svg"
                  alt="Logotipo azul da Olinger"
                  className="w-36 h-full object-contain"
                />
              </Link>
              <nav>
                <ul className="flex flex-wrap items-center justify-center gap-6 py-2 px-4">
                  <NavItem to="/">Início</NavItem>
                  <NavItem to="/produtos">Produtos</NavItem>
                  {/* <MenuDropdown data={productsData}>Produtos</MenuDropdown> */}
                  {/* <NavItem>Clientes</NavItem> */}
                  {/* <NavItem>Qualidade</NavItem> */}
                  <NavItem to="/sobre">Sobre</NavItem>
                </ul>
              </nav>
              <Button asButton onClick={() => redirectToWhatsApp()}>Fazer orçamento</Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
