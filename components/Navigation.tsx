"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: "Plataforma",
      dropdown: [
        { label: "Foundry", href: "/platform/foundry" },
        { label: "Gotham", href: "/platform/gotham" },
        { label: "Apollo", href: "/platform/apollo" },
        { label: "AIP", href: "/platform/aip" },
      ],
    },
    {
      label: "Soluciones",
      dropdown: [
        { label: "Defensa", href: "/solutions/defense" },
        { label: "Inteligencia", href: "/solutions/intelligence" },
        { label: "Salud", href: "/solutions/healthcare" },
        { label: "Energía", href: "/solutions/energy" },
      ],
    },
    {
      label: "Empresa",
      dropdown: [
        { label: "Acerca de", href: "/company/about" },
        { label: "Carreras", href: "/company/careers" },
        { label: "Noticias", href: "/company/news" },
        { label: "Contacto", href: "/company/contact" },
      ],
    },
    { label: "Recursos", href: "/resources" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/thestral-icon.svg"
                alt="Thestral Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 leading-tight">THESTRAL</span>
                <span className="text-xs text-gray-500 font-medium tracking-wider leading-none">DATA INTELLIGENCE</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <button
                    className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors py-2"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {item.dropdown && openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-2"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/demo"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Solicitar Demo
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full text-left py-2 text-gray-700"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      }
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block py-2 text-gray-600 hover:text-black"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="block py-2 text-gray-700 hover:text-black"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/demo"
              className="block w-full bg-black text-white text-center px-4 py-2 rounded-md hover:bg-gray-800 transition-colors mt-4"
            >
              Solicitar Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;