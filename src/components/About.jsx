import perfilImg from '../assets/perfil.jpg'

const About = () => {
  return (
          <section id="perfil" className="mt-12 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-6 justify-evenly pb-6">
              <img
                src={perfilImg}
                alt="Foto de Jocely Marques"
                className="w-42 h-42 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-green-300 shadow mb-4 md:mb-0 md:ml-6 order-1 md:order-2"
              />
              <div className="flex flex-col order-2 md:order-1">
                <h1 className="w-full font-bold text-3xl sm:text-7xl text-center sm:text-left text-green-400 mb-10">
                  Jocely Marques
                </h1>
                <p className="text-2xl text-justify text-gray-500 max-w-lg mb-5">
                  Desenvolvedor Full-Stack apaixonado por tecnologia, com experiência em React, Tailwind, Laravel, PHP, SQL e Docker. Entrego soluções digitais modernas e eficientes, atuando tanto no front-end quanto no back-end.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex w-fit items-center rounded-full bg-green-400/20 px-2 py-1 text-xs font-medium text-gray-400">
                    Reactjs
                  </span>
                  <span className="inline-flex w-fit items-center rounded-full bg-orange-400/20 px-2 py-1 text-xs font-medium text-gray-400">
                    Laravel
                  </span>
                  <span className="inline-flex w-fit items-center rounded-full bg-gray-400/20 px-2 py-1 text-xs font-medium text-gray-400">
                    SQL
                  </span>
                  <span className="inline-flex w-fit items-center rounded-full bg-yellow-400/20 px-2 py-1 text-xs font-medium text-gray-400">
                    HTML
                  </span>
                  <span className="inline-flex w-fit items-center rounded-full bg-blue-400/20 px-2 py-1 text-xs font-medium text-gray-400">
                    CSS
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 mt-6">
                  <a
                    href="https://github.com/jocelymarques" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jocelymarques" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="/portfolio/CV_BR_Francisco_Jocely_Dias_Marques_DEV_TI.pdf" download
                    className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </section>
  );
};

export default About;