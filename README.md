# 🤝 Projeto ONGs - Conectando Pessoas e Causas

## ✨ Visão Geral

Este projeto é a interface frontend construída com Next.js, projetada para facilitar a interação e visualização de Organizações Não Governamentais (ONGs). Ele se conecta diretamente à [API de ONGs](https://github.com/rianefm/Api_ONGS) (clique para ver o repositório da API), permitindo aos usuários buscar, filtrar e explorar ONGs por estado ou tipo de serviço, conectando-os a causas sociais e de proteção animal.

A aplicação oferece uma experiência de usuário moderna, responsiva e otimizada, garantindo fácil acesso às informações das ONGs.

---

## 🚀 Tecnologias Utilizadas

* **Next.js 14+**: Framework React para desenvolvimento de aplicações web com renderização do lado do servidor (SSR) e otimizações.
* **React**: Biblioteca JavaScript líder para construção de interfaces de usuário dinâmicas.
* **Tailwind CSS**: Um framework CSS utilitário que agiliza o desenvolvimento e garante um design responsivo e consistente.
* **JavaScript / TypeScript**: Linguagem de programação principal, utilizando TypeScript para tipagem estática e maior robustez do código.

---

## 📁 Estrutura de Pastas

LANDINGPAGE/

├── .next/                
├── node_modules/         
├── public/              
│   ├── hero.svg         
│   └── ...              
└── src/
├── app/             
│   ├── components/  
│   │   ├── AllOngsSection.tsx        
│   │   ├── FooterSection.tsx        
│   │   ├── GalleryServicesSection.tsx
│   │   ├── HeroSection.tsx           
│   │   ├── InteractiveFilterSection.tsx
│   │   ├── OngsByServiceSec.tsx     
│   │   └── OngsByStateSec.tsx       
│   ├── hooks/        
│   │   └── useFetchOngs.ts           
│   ├── favicon.ico  
│   ├── globals.css   
│   ├── layout.tsx    
│   └── page.tsx      
├── .gitignore            
├── LICENSE              
├── next-env.d.ts         
├── next.config.js        
├── package-lock.json     
├── package.json          
├── postcss.config.js     
└── README.md 

---

## 🔧 Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e executar a aplicação em sua máquina de desenvolvimento:

1.  **Pré-requisitos:**
    * Certifique-se de ter o [Node.js](https://nodejs.org/) (versão 18.x ou superior recomendada) e o [npm](https://www.npmjs.com/) (ou [Yarn](https://yarnpkg.com/)) instalados.

2.  **Clonar o Repositório:**
    ```bash
    git clone [[https://github.com/rianefm/m5.git))
    ```

3.  **Entrar na Pasta do Projeto:**
    ```bash
    cd m5
    ```

4.  **Instalar as Dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

5.  **Configurar e Iniciar a API (essencial):**
    Este frontend depende da sua API para funcionar corretamente. Certifique-se de que sua [API de ONGs](https://github.com/rianefm/Api_ONGS) esteja online e acessível.
    * A aplicação está configurada para consumir a API em: `https://api-ongs.onrender.com`.
    * Se você estiver rodando uma versão local da API, ajuste a URL base da API no seu código frontend (geralmente em um custom hook ou arquivo de configuração) para apontar para o endereço local (ex: `http://localhost:3001`).

6.  **Iniciar o Servidor de Desenvolvimento do Frontend:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

    O aplicativo estará disponível em seu navegador em `http://localhost:3000`.

---

## 📋 Funcionalidades Principais

* **Seção Hero Dinâmica:** Apresentação inicial do projeto com uma imagem de fundo impactante e chamada para ação.
* **Navegação por Âncora:** Botão "Ver ONGs" na Hero Section que rola suavemente para a seção de `ONGs em Destaque`.
* **Serviços Oferecidos:** Uma seção dedicada para destacar os tipos de serviços que as ONGs parceiras oferecem.
* **Filtro Interativo de ONGs:** Permite aos usuários buscar e refinar a lista de ONGs por:
    * **Estado (UF):** Encontre ONGs em uma localidade específica.
    * **Tipo de Serviço:** Filtre por serviços como "alimentação", "saúde", "proteção animal", etc.
* **ONGs em Destaque:** Exibe uma prévia das ONGs mais relevantes ou recentemente adicionadas.
* **Rodapé Completo:** Contém informações de copyright dinâmicas e links úteis (GitHub da API, Sobre, Contato).

---

## 🤝 Contribuição

Contribuições são muito bem-vindas! Se você tiver sugestões de melhorias, encontrar algum bug ou quiser adicionar novas funcionalidades, sinta-se à vontade para:

1.  Abrir uma [Issue](https://github.com/rianefm/m5/issues) descrevendo o problema ou a sugestão.
2.  Criar um [Fork](https://github.com/rianefm/m5/fork) do projeto.
3.  Desenvolver suas alterações em uma nova branch.
4.  Enviar um [Pull Request](https://github.com/rianefm/m5/pulls) detalhando suas modificações.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE) na raiz do projeto.

---

## 👩🏽‍🦱 Desenvolvido por

[Riane Ferreira Menezes](linkedin.com/in/rianeferreira](https://www.linkedin.com/in/rianeferreira/)) 
[GitHub de Riane Ferreira Menezes](https://github.com/rianefm)

---           
