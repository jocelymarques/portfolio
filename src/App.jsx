
import './output.css'
import Footer from './components/Footer.jsx'
import NavBar from './components/NavBar.jsx'
import About from './components/About.jsx'
import Experiences from './components/Experiences.jsx'
import Contacts from './components/Contacts.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import site3 from './assets/site3.jpg'

import { useState } from 'react'
import Modal from './components/Modal.jsx'
import TechBadge from './components/TechBadge.jsx'
import projeto2Img1 from './assets/projeto2/miniblog1.png';
import projeto2Img2 from './assets/projeto2/miniblog2.png';
import projeto2Img3 from './assets/projeto2/miniblog3.png';
import projeto2Img4 from './assets/projeto2/miniblog4.png';
import projeto2Img5 from './assets/projeto2/miniblog5.png';
import projeto1Img1 from './assets/projeto1/shopnet1.png';
import projeto1Img2 from './assets/projeto1/shopnet2.png';
import projeto1Img3 from './assets/projeto1/shopnet3.png';
import projeto1Img4 from './assets/projeto1/shopnet4.png';

const projeto2Images = [projeto2Img1, projeto2Img2, projeto2Img3, projeto2Img4, projeto2Img5];
const projeto1Images = [projeto1Img1, projeto1Img2, projeto1Img3, projeto1Img4];

const projects = [
  {
    title: "Shop Net",
    description: "Projeto de e-commerce desenvolvido com Reactjs, utilizando Vite para build rápido e TypeScript para tipagem estática. A interface é estilizada com TailwindCSS e a navegação entre páginas é feita com React Router. O consumo dos produtos é realizado via API Rest, integrando a FakeStore API para simular um catálogo realista e dinâmico.",
    image: projeto1Images[0],
    projeto1Images,
    techs: [
      { name: "Reactjs" },
      { name: "API Rest" },
      { name: "Vite" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "React Router" },
      { name: "FakeStore API" }
    ],
    previewUrl: "https://jocelymarques.github.io/shopnet/",
    githubUrl: "https://github.com/jocelymarques/shopnet",
  },
  {
    title: "Mini Blog",
    description: "Projeto de blog simples desenvolvido com Reactjs, Nextjs, Firebase, TypeScript e TailwindCSS. Permite aos usuários ler postagens, navegar por categorias e interagir com o conteúdo de forma intuitiva.",
    image: projeto2Images[0],
    projeto2Images,
    techs: [
      { name: "Reactjs" },
      { name: "Nextjs" },
      { name: "Firebase" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
    ],
    previewUrl: "https://mini-blog-iobxm0rvo-jocelymarques-projects.vercel.app/",
    githubUrl: "https://github.com/jocelymarques/mini-blog",
  },
  {
    image: site3,
    title: "Projeto 3 - Em Breve",
    techs: [
      // { name: "Reactjs" }
    ],
    previewUrl: "#",
    githubUrl: "#",
  },
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };



  return (
    <>
      <NavBar />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={selectedProject?.projeto1Images || selectedProject?.projeto2Images || []}
        project={selectedProject || ""}
      >
        {selectedProject && (
          <>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{selectedProject.title}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.techs.map((tech, idx) => (
                <TechBadge key={idx} name={tech.name} />
              ))}
            </div>
            <div className="flex justify-between gap-3">
              <a href={selectedProject.previewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Preview
              </a>
              <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                GitHub
              </a>
              <button className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={closeModal}>
                Fechar
              </button>
            </div>
          </>
        )}
      </Modal>

      <div className="h-20" />
      <div className='container p-1 sm:mx-auto'>
        <div className=' flex flex-col items-left min-h-screen p-4 '>
          <About />

          <section id="projetos" className="mt-16 animate-fade-up animate-duration-[5000ms] animate-delay-100 animate-ease-in-out ">
            <h2 className="text-3xl font-semibold text-green-500/80 mb-6 text-center">Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} onClick={() => openModal(project)} />
              ))}
            </div>
          </section>

          <Experiences />
          <Contacts />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
