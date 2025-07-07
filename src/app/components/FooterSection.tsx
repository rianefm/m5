export default function FooterSection() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">Projeto ONGs &copy; 2025</p>
          <p className="text-sm">Criado para conectar você a ONGs incríveis.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-center md:text-left">
          <a
            href="https://github.com/rianefm/Api_ONGS"
            target="_blank"
            className="hover:underline text-purple-300"
          >
            GitHub da API
          </a>
          <a href="#sobre" className="hover:underline text-purple-300">
            Sobre a iniciativa
          </a>
          <a href="#contato" className="hover:underline text-purple-300">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}
