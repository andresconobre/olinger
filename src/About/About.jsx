import React, { useState } from "react";
import Qualities from "../Home/Qualities/Qualities";

const About = () => {
  const [aboutData, setAboutData] = useState({
    text1:
      "Olinger, situada no coração da cidade, conhecida por sua tradição e compromisso inabalável com a qualidade. Fundada há décadas por uma família visionária, ela se tornou um ponto de referência para aqueles que buscavam uniformes empresariais feitos com excelência. \n\nO segredo do sucesso não estava apenas na habilidade de tecer os melhores tecidos, mas também na sua filosofia central: o respeito pelo colaborador e a entrega de qualidade inigualável. \n\nDesde o início, a malharia viu seus colaboradores como parte integrante da sua família. Eles eram mais do que simples funcionários; eram artesãos dedicados, cujo trabalho árduo e habilidades eram valorizados e reconhecidos. Cada peça de tecido era cuidadosamente trabalhada pelas mãos experientes desses profissionais, que dedicavam seu tempo e talento para garantir que cada uniforme fosse uma obra-prima. \n\nAlém disso, a malharia tem um compromisso inabalável com a qualidade. Desde a seleção das melhores fibras até o processo de tingimento e acabamento, cada etapa era realizada com precisão e atenção aos detalhes. Não era apenas sobre entregar um produto; era sobre entregar uma experiência, onde cada uniforme refletisse o profissionalismo e a dedicação de quem o usava.",
    text2:
      "Esses valores fundamentais não apenas mantiveram a malharia no topo do mercado, mas também cultivaram relacionamentos duradouros com seus clientes. Empresas de todos os tamanhos confiavam na malharia para fornecer uniformes que não apenas representassem sua marca, mas também transmitissem qualidade e confiabilidade aos seus colaboradores. \n\nAo longo dos anos, a malharia continuou a prosperar, não apenas como um negócio, mas como uma instituição respeitada na comunidade. Seu legado de excelência e compromisso com as pessoas e a qualidade permaneceu intacto, passando de geração em geração. \n\nAssim, a malharia tradicional continuou a tecer não apenas tecidos, mas também histórias de sucesso, onde o respeito pelo colaborador e a entrega de qualidade eram os fios condutores de tudo o que faziam.",
  });
  return (
    <section className="font-DM-Sans pt-12">
      <div className="container">
        <img src="" alt="" className="rounded-lg w-full max-h-[450px] h-full" />
        <h2 className="font-bold text-blue-olinger-c12 text-[40px] py-4">
          Malharia Olinger
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-olinger-c11 text-sm pb-4">
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <p className="whitespace-pre-wrap">{aboutData.text1}</p>
            <Qualities col />
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <p className="whitespace-pre-wrap">{aboutData.text2}</p>
            <img
              src=""
              alt=""
              className="rounded-lg w-full max-h-[450px] h-full"
            />
          </div>
        </div>
      </div>
      <div className="py-4 bg-blue-olinger-c3">
        <div className="container flex justify-between flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="flex flex-col items-start gap-10">
            <h3 className="font-semibold text-[32px]/9 text-blue-olinger-c12 relative inline-block mb-4 after:absolute after:h-1 after:w-1/2 after:bg-blue-olinger-c7 after:rounded after:-bottom-3 after:left-0">
              Onde estamos
            </h3>
            <div className="flex flex-col gap-2.5">
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
              <a href="tel:4232396250" className="flex items-center gap-1">
                <img
                  src="/img/phone-icon.svg"
                  alt="Ícone de telefone"
                  className="w-3 h-3 object-contain"
                />
                (42) 3239-6250
              </a>
              <a href="tel:4232396250" className="flex items-center gap-1">
                <img
                  src="/img/phone-icon.svg"
                  alt="Ícone de telefone"
                  className="w-3 h-3 object-contain"
                />
                (42) 3239-6250
              </a>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14455.855242030286!2d-50.1818618!3d-25.0692157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81a6a9825f9b5%3A0xf24d4acd0316fe88!2sMalharia%20Olinger!5e0!3m2!1spt-BR!2sbr!4v1719832757279!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg w-full lg:w-[600px]"></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
