import React, { useState } from "react";
import Qualities from "../Home/Qualities/Qualities";

const About = () => {
  const [aboutData, setAboutData] = useState({
    text1:
      "A Malharia Olinger é uma empresa familiar sinônimo de tradição e qualidade, especializada na fabricação de uniformes profissionais com sede em Ponta Grossa-PR. Fundada em 1991 pelo Sr. Rui Olinger, um grande visionário com o propósito de oferecer uniformes que aliam conforto, qualidade e beleza acima de tudo, tornando-se pioneira do setor de confecção dos Campos Gerais. \n\nCom mais de 30 anos de atuação, a empresa conquistou destaque no mercado nacional, atendendo clientes em todo o Brasil com soluções personalizadas para diferentes setores, como indústrias, comércio, saúde, educação e serviços. \n\nA fábrica utiliza tecnologia de ponta e materiais de alta qualidade para garantir peças resistentes e confortáveis. Um dos grandes diferenciais é a personalização dos uniformes, com serviços de bordado, serigrafia e modelagens especificas que refletem a identidade visual de cada cliente. \n\nÉ uma empresa reconhecida por sua excelência e compromisso com a qualidade. Possui certificado pela Cedro, uma das maiores fábricas de tecido do país, um selo que atesta o alto padrão dos produtos. Além disso, é homologado pelo Grupo Stellantis, um dos maiores conglomerados automotivos do mundo.",
    text2:
      "Com uma equipe qualificada, a empresa está em constante evolução, acompanhando tendências do mercado e investindo em melhorias contínuas para oferecer produtos modernos e diferenciados. Mais do que uniformes, a Malharia entrega peças que representam profissionalismo, organização e identidade corporativa, além disso, detém todo o processo de fabricação dentro da própria empresa, mantendo total controle da qualidade e agilidade da entrega. \n\nSeja qual for a necessidade, a Malharia Olinger é sinônimo de capacidade, confiança e inovação, reafirmando sua posição como uma das principais fornecedoras de uniformes profissionais no Brasil.",
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14455.855242030286!2d-50.1818618!3d-25.0692157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81a6a9825f9b5%3A0xf24d4acd0316fe88!2sMalharia%20Olinger!5e0!3m2!1spt-BR!2sbr!4v1719832757279!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg w-full lg:w-[600px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
