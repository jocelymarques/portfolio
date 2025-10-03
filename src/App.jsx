import { useState } from 'react'
import reactLogo from './assets/react.svg'
import perfilImg from './assets/perfil.jpg'
import site from './assets/site.png'
import site2 from './assets/site2.png'
import site3 from './assets/site3.png'
import viteLogo from '/vite.svg'
import './output.css'
import NavBar from './components/NavBar.jsx'

function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarWhatsApp = () => {
    const texto = `Olá, meu nome é ${nome}. Assunto: ${email}. Mensagem: ${mensagem}`;
    const url = `https://wa.me/5588993302318?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <NavBar />
      <div className="h-20" />
      <div className='container p-1 sm:mx-auto'>
        <div className=' flex flex-col items-left min-h-screen p-4 '>

          {/* Seção Sobre Mim */}
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
                    href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="/CV-Jocely-Marques.pdf" download
                    className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Seção de Projetos */}
          <section id="projetos" className="mt-16 ">
            <h2 className="text-3xl font-semibold text-green-500 mb-6 text-center">Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


              <div className=" bg-white  rounded-lg shadow-sm dark:bg-gray-800  backdrop-blur-xl  ring-1 ring-white/20 transition-all duration-300 hover:backdrop-blur-2xl hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:scale-105 hover:border-white/50" >
                <a href="#">
                  <img className="rounded-t-lg" src={site} alt="Foto de Jocely Marques" />
                </a>
                <div className="flex flex-col p-5 gap-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Projeto 1</h5>
                  </a>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="inline-flex w-fit items-center rounded-full bg-violet-400/20 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                      Reactjs
                    </span>
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-400/20 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                      Laravel
                    </span>
                    <span className="inline-flex w-fit items-center rounded-full bg-gray-400/20 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                      SQL
                    </span>
                    <span className="inline-flex w-fit items-center rounded-full bg-yellow-400/20 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                      HTML
                    </span>
                    <span className="inline-flex w-fit items-center rounded-full bg-blue-400/20 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                      CSS
                    </span>
                  </div>
                  <div className="flex justify-evenly gap-3">
                    <a href="#" className="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Preview
                    </a>
                    <a href="#" className="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className=" bg-white  rounded-lg shadow-sm dark:bg-gray-800  backdrop-blur-xl  ring-1 ring-white/20 transition-all duration-300 hover:backdrop-blur-2xl hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:scale-105 hover:border-white/50" >
                <a href="#">
                  <img className="rounded-t-lg" src={site2} alt="Foto de Jocely Marques" />
                </a>
                <div className="flex flex-col p-5 gap-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Projeto 2</h5>
                  </a>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="inline-flex w-fit items-center rounded-full bg-violet-400/20 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                      Reactjs
                    </span>
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-400/20 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                      Laravel
                    </span>
                    <span className="inline-flex w-fit items-center rounded-full bg-gray-400/20 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                      SQL
                    </span>
                    <span className="inline-flex w-fit items-center rounded-full bg-yellow-400/20 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                      HTML
                    </span>
                    <span className="inline-flex w-fit items-center rounded-full bg-blue-400/20 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                      CSS
                    </span>
                  </div>
                  <div className="flex justify-evenly gap-3">
                    <a href="#" className="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Preview
                    </a>
                    <a href="#" className="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>


              <div className=" bg-white  rounded-lg shadow-sm dark:bg-gray-800  backdrop-blur-xl  ring-1 ring-white/20 transition-all duration-300 hover:backdrop-blur-2xl hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:scale-105 hover:border-white/50" >
                <a href="#">
                  <img className="rounded-t-lg" src={site3} alt="Foto de Jocely Marques" />
                </a>
                <div className="flex flex-col p-5 gap-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Projeto 3</h5>
                  </a>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="inline-flex w-fit items-center rounded-full bg-violet-400/20 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                      Reactjs
                    </span>
                    <span className="inline-flex w-fit items-center rounded-full bg-orange-400/20 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                      Laravel
                    </span>
                    <span className="inline-flex w-fit items-center rounded-full bg-gray-400/20 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                      SQL
                    </span>
                    <span className="inline-flex w-fit items-center rounded-full bg-yellow-400/20 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                      HTML
                    </span>
                    <span className="inline-flex w-fit items-center rounded-full bg-blue-400/20 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                      CSS
                    </span>
                  </div>
                  <div className="flex justify-evenly gap-3">
                    <a href="#" className="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Preview
                    </a>
                    <a href="#" className="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>


            </div>
          </section>
        {/* Seção Sobre Mim (Formação, Experiências e Certificados) */}
        <section id="sobre-mim" className="mt-20 mb-20">
          <h2 className="text-3xl font-semibold text-green-500 mb-10 text-center">Sobre Mim</h2>
          <p className="sm:text-3xl text-gray-600 dark:text-gray-300 mb-20 max-w-4xl mx-auto text-justify ">
            Desenvolvedor Full-Stack com formação em Análise de Sistemas, especializado em aplicações web modernas e escaláveis. Experiência com React.js, Angular.js, PHP, Laravel e MySQL. Competência em Docker, integração de APIs, otimização de performance, Git e metodologias Ágeis (Scrum e Kanban). Focado em entregar soluções que agregam valor ao negócio.
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
            {/* Card Formação */}
            <div className="bg-gradient-to-br from-green-100 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl border-2 border-green-300 p-8 flex-1 max-w-sm flex flex-col items-center mb-6 md:mb-0 hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" /></svg>
                <h3 className="text-xl font-bold text-green-500">Formação</h3>
              </div>
              <ul className="list-none text-gray-700 dark:text-gray-200 mb-4 w-full text-left">
                <li className="mb-2"><span className="font-semibold text-green-600">Graduação:</span> Análise de Sistemas de Computação – UNOPAR</li>
              </ul>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
                <h3 className="text-xl font-bold text-green-500">Certificados</h3>
              </div>
              <ul className="list-none text-gray-700 dark:text-gray-200 w-full text-left">
                <li className="mb-2"><span className="font-semibold text-green-600">JavaScript:</span> Curso Completo (Udemy)</li>
                <li className="mb-2"><span className="font-semibold text-green-600">SPA com Vue JS e API com Laravel:</span> Udemy</li>
                <li className="mb-2"><span className="font-semibold text-green-600">PHP 8:</span> Hcode</li>
                <li className="mb-2"><span className="font-semibold text-green-600">Dialogflow Completo:</span> Criação de Assistentes Virtuais (Udemy)</li>
                <li><span className="font-semibold text-green-600">Hardware, Redes e Notebooks:</span> Microlins</li>
              </ul>
            </div>
            {/* Card Competências */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg ring-1 ring-green-200 p-8 flex-1 max-w-sm flex flex-col items-center mb-6 md:mb-0 hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-green-400 mb-4">Competências</h3>
              {/* Desenvolvimento Full-Stack */}
              <h4 className="text-lg font-semibold text-green-400 mb-2 w-full">Desenvolvimento Full-Stack</h4>
              <div className="flex flex-wrap gap-2 mb-4 w-full">
                <span className="inline-flex w-fit items-center rounded-full bg-green-400/20 px-2 py-1 text-xs font-medium text-gray-400">React.js</span>
                <span className="inline-flex w-fit items-center rounded-full bg-green-400/20 px-2 py-1 text-xs font-medium text-gray-400">AngularJS</span>
                <span className="inline-flex w-fit items-center rounded-full bg-green-400/20 px-2 py-1 text-xs font-medium text-gray-400">PHP</span>
                <span className="inline-flex w-fit items-center rounded-full bg-green-400/20 px-2 py-1 text-xs font-medium text-gray-400">Laravel</span>
                <span className="inline-flex w-fit items-center rounded-full bg-green-400/20 px-2 py-1 text-xs font-medium text-gray-400">MySQL</span>
                <span className="inline-flex w-fit items-center rounded-full bg-green-400/20 px-2 py-1 text-xs font-medium text-gray-400">TypeScript</span>
                <span className="inline-flex w-fit items-center rounded-full bg-green-400/20 px-2 py-1 text-xs font-medium text-gray-400">HTML</span>
                <span className="inline-flex w-fit items-center rounded-full bg-green-400/20 px-2 py-1 text-xs font-medium text-gray-400">CSS</span>
                <span className="inline-flex w-fit items-center rounded-full bg-green-400/20 px-2 py-1 text-xs font-medium text-gray-400">JavaScript</span>
              </div>
              {/* DevOps */}
              <h4 className="text-lg font-semibold text-green-400 mb-2 w-full">DevOps</h4>
              <div className="flex flex-wrap gap-2 mb-4 w-full">
                <span className="inline-flex w-fit items-center rounded-full bg-blue-400/20 px-2 py-1 text-xs font-medium text-gray-400">Docker</span>
                <span className="inline-flex w-fit items-center rounded-full bg-blue-400/20 px-2 py-1 text-xs font-medium text-gray-400">GitLab</span>
                <span className="inline-flex w-fit items-center rounded-full bg-blue-400/20 px-2 py-1 text-xs font-medium text-gray-400">CI/CD</span>
              </div>
              {/* Metodologias */}
              <h4 className="text-lg font-semibold text-green-400 mb-2 w-full">Metodologias</h4>
              <div className="flex flex-wrap gap-2 mb-4 w-full">
                <span className="inline-flex w-fit items-center rounded-full bg-yellow-400/20 px-2 py-1 text-xs font-medium text-gray-400">Scrum</span>
                <span className="inline-flex w-fit items-center rounded-full bg-yellow-400/20 px-2 py-1 text-xs font-medium text-gray-400">Kanban</span>
                <span className="inline-flex w-fit items-center rounded-full bg-yellow-400/20 px-2 py-1 text-xs font-medium text-gray-400">Lean</span>
                <span className="inline-flex w-fit items-center rounded-full bg-yellow-400/20 px-2 py-1 text-xs font-medium text-gray-400">Kaizen</span>
                <span className="inline-flex w-fit items-center rounded-full bg-yellow-400/20 px-2 py-1 text-xs font-medium text-gray-400">5S</span>
              </div>
              {/* Redes */}
              <h4 className="text-lg font-semibold text-green-400 mb-2 w-full">Redes</h4>
              <div className="flex flex-wrap gap-2 mb-4 w-full">
                <span className="inline-flex w-fit items-center rounded-full bg-gray-400/20 px-2 py-1 text-xs font-medium text-gray-400">TCP/IP</span>
                <span className="inline-flex w-fit items-center rounded-full bg-gray-400/20 px-2 py-1 text-xs font-medium text-gray-400">OSPF</span>
                <span className="inline-flex w-fit items-center rounded-full bg-gray-400/20 px-2 py-1 text-xs font-medium text-gray-400">VLANs</span>
              </div>
              {/* Outros */}
              <h4 className="text-lg font-semibold text-green-400 mb-2 w-full">Outros</h4>
              <div className="flex flex-wrap gap-2 w-full">
                <span className="inline-flex w-fit items-center rounded-full bg-orange-400/20 px-2 py-1 text-xs font-medium text-gray-400">Suporte Técnico</span>
                <span className="inline-flex w-fit items-center rounded-full bg-orange-400/20 px-2 py-1 text-xs font-medium text-gray-400">Help Desk</span>
                <span className="inline-flex w-fit items-center rounded-full bg-orange-400/20 px-2 py-1 text-xs font-medium text-gray-400">Gestão Logística</span>
              </div>
            </div>
            {/* Card Experiências */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg ring-1 ring-green-200 p-8 flex-1 max-w-sm flex flex-col items-center mb-6 md:mb-0 hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-green-400 mb-4">Experiências</h3>
              <div className="relative w-full">
                <div className="border-l-2 border-green-400 ml-4">
                  {/* Timeline Item */}
                  <div className="mb-8 ml-6">
                    <div className="flex flex-col">
                      <span className="text-green-600 font-semibold">Jun 2021 – Ago 2025</span>
                      <span className="font-bold text-gray-800 dark:text-gray-200">Analista de Desenvolvimento Júnior – Giga+ Fibra</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Desenvolvimento web com AngularJS e ReactJS, back-end com PHP/Laravel, integração via APIs RESTful, CI/CD com GitLab, containers Docker e gestão ágil com Jira.</span>
                    </div>
                  </div>
                  <div className="mb-8 ml-6">
                    <div className="flex flex-col">
                      <span className="text-green-600 font-semibold">Jun 2021 – Abr 2022</span>
                      <span className="font-bold text-gray-800 dark:text-gray-200">Técnico de TI – Giga+ Fibra</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Estabilidade de sistemas, diagnóstico de incidentes, configuração de redes locais e suporte Help Desk.</span>
                    </div>
                  </div>
                  <div className="mb-8 ml-6">
                    <div className="flex flex-col">
                      <span className="text-green-600 font-semibold">Set 2020 – Jun 2021</span>
                      <span className="font-bold text-gray-800 dark:text-gray-200">Desenvolvedor / Operador de Rede – Redenet Telecom</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Desenvolvimento de aplicações web, otimização de consultas SQL, coordenação de equipe com Trello.</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>
        {/* Seção de Contatos */}
        <section id="contatos" className="mt-20 mb-20">
          <h2 className="text-3xl font-semibold text-green-500 mb-6 text-center">Contatos</h2>
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg text-gray-500 mb-2 text-center">Fique à vontade para entrar em contato comigo!</p>
            <div className="w-full max-w-md mx-auto mb-6">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  placeholder="Seu Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <textarea
                  placeholder="Sua Mensagem"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-24"
                ></textarea>
                <button
                  type="button"
                  onClick={enviarWhatsApp}
                  className="w-full px-6 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition"
                >
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:jocely.marques@email.com"
                className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
              >
                E-mail
              </a>
              <a
                href="https://wa.me/+5588993302318" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition"
              >
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>

  </>
  )
}

export default App
