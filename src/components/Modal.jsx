import { useState } from "react";
const Modal = ({ isOpen, onClose, project }) => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  if (!isOpen || !project) return null;

  const images = project.projeto1Images || project.projeto2Images || [];
  const { title, description, techs, previewUrl, githubUrl } = project;

  const changeImage = (nextIdx) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(nextIdx);
      setFade(true);
    }, 200);
  };

  const prevImage = () => changeImage(current === 0 ? images.length - 1 : current - 1);
  const nextImage = () => changeImage(current === images.length - 1 ? 0 : current + 1);

  return (
    <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
      <div onClick={e => e.stopPropagation()} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full mx-4 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-center">
          {images.length > 0 && (
            <div className="flex flex-col items-center md:items-center md:w-1/2 w-full mb-4 md:mb-0">
              <div className="relative w-full h-64 md:h-[32rem] flex items-center justify-center">
                <img
                  src={images[current]}
                  alt={`Imagem ${current + 1}`}
                  className={`w-full h-full object-contain rounded-lg shadow transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
                />
                <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-800 text-white rounded-full shadow hover:bg-gray-600">&#8592;</button>
                <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-800 text-white rounded-full shadow hover:bg-gray-600">&#8594;</button>
                <span className="absolute bottom-2 right-1/2 translate-x-1/2 bg-gray-900 bg-opacity-70 text-white text-xs px-3 py-1 rounded">{current + 1} / {images.length}</span>
              </div>
            </div>
          )}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-2 md:px-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {techs && techs.map((tech, idx) => (
                <span key={idx} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded text-sm">{tech.name}</span>
              ))}
            </div>
            {description && (
              <p className="mt-4 text-gray-700 dark:text-gray-200 text-base">{description}</p>
            )}
            <div className="flex flex-row w-full mt-6 gap-3 justify-between">
              {previewUrl && (
                <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Preview
                </a>
              )}
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  GitHub
                </a>
              )}
              <button className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={onClose}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;