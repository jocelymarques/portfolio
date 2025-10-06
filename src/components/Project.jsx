import site from '../assets/site.png'
import site2 from '../assets/site2.jpg'
import site3 from '../assets/site3.jpg'
import TechBadge from './TechBadge';
import ProjectCard from './ProjectCard';

const projects = [
  {
    image: site,
    title: "Mini Blog",
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
    image: site2,
    title: "Projeto 2 - Em Breve",
    techs: [
      { name: "Reactjs" },
    ],
    previewUrl: "#",
    githubUrl: "#",
  },
  {
    image: site3,
    title: "Projeto 3 - Em Breve",
    techs: [
      { name: "Reactjs" }
    ],
    previewUrl: "#",
    githubUrl: "#",
  },
];

const Project = () => {
  return (
    <section id="projetos" className="mt-16 ">
      <h2 className="text-3xl font-semibold text-green-500 mb-6 text-center">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Project;