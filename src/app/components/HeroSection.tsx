export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">
        Conheça e Apoie ONGs que Fazem a Diferença
      </h1>
      <p className="mb-6 text-lg">
        Encontre ONGs por estado, tipo de serviço ou conheça todas elas!
      </p>
      <a
        href="#ongs"
        className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition"
      >
        Ver ONGs
      </a>
    </section>
  );
}
