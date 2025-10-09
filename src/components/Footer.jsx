const Footer = () => (
  <footer className="w-full text-gray-200 py-6 mt-12">
    <hr className="border-gray-700 mb-5" />
    <div className="container mx-auto flex flex-col items-center justify-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Jocely Marques. Todos os direitos reservados.</p>
      <div className="flex gap-4 mt-2">
        <a href="https://github.com/jocelymarques" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">GitHub</a>
        <a href="mailto:jocelymarques@gmail.com" className="hover:text-green-400 transition-colors">E-mail</a>
        <a href="https://www.linkedin.com/in/jocelymarques/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;
