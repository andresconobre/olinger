import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

const MenuDropdown = ({ children, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef}>
      <NavItem
        onClick={() => setIsOpen((prev) => !prev)}
        className={isOpen ? "font-bold bg-blue-olinger-c3" : ""}
      >
        <span className="flex items-center gap-2">
          {children}
          <figure className="w-3.5 h-3.5 grid place-items-center">
            <img
              src="/img/caret-down-icon.svg"
              alt="Ícone de seta para baixo"
              className="object-contain"
            />
          </figure>
        </span>
      </NavItem>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 max-w-72 max-h-96 overflow-y-auto w-full mt-2 flex flex-col rounded border border-blue-olinger-c3 bg-white p-2 shadow-sm z-50">
          {data.slice(0, 3).map((item, index) => (
            <Link
              to={`produtos/${item.link}`}
              className="group hover:bg-blue-olinger-c2 rounded transition flex justify-between"
              key={index}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex justify-center flex-col gap-1 py-2 px-4">
                <p className="text-sm text-blue-olinger-c12 group-hover:font-semibold transition-all duration-200">
                  {item.name}
                </p>
                <p className="text-gray-olinger-c9 text-[10px]">
                  {item.cardDetails}
                </p>
                <p className="max-h-0 -mt-1 overflow-hidden group-hover:mt-0 group-hover:max-h-10 text-blue-olinger-c11 text-[10px] transition-all duration-200">
                  Ver mais
                </p>
              </div>
              <img
                src={item.img}
                alt={item.alt}
                className="w-10.5 rounded-r opacity-0 group-hover:opacity-100 transition-all object-cover"
              />
            </Link>
          ))}
          <Link
            to="produtos"
            className="text-sm text-blue-olinger-c12 underline md:no-underline hover:underline underline-offset-2 text-center my-2"
            onClick={() => setIsOpen(false)}
          >
            Ver todos
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
