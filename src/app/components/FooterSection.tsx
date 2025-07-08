// src/app/components/FooterSection.tsx

import React from "react";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2937] text-white py-8 px-6 mt-8 rounded-lg shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-xl font-bold mb-1">
            {" "}
            Projeto ONGs &copy; {currentYear}
          </p>
          <p className="text-sm text-gray-400">
            {" "}
            Criado para conectar você a ONGs incríveis.
          </p>
        </div>

        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
          <a
            href="https://github.com/rianefm/Api_ONGS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7C3AED] hover:text-[#5B21B6] transition-colors"
          >
            GitHub da API
          </a>
        </nav>
      </div>
    </footer>
  );
}
