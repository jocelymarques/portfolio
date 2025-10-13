const Experiences = () => {
    return (
        <section id="sobre-mim" className="mt-20 mb-20">
            <h2 className="text-3xl font-semibold text-green-500/80  mb-10 text-center">Sobre Mim</h2>
            <p className="sm:text-3xl text-gray-700 dark:text-gray-500 mb-20 max-w-4xl mx-auto text-justify ">
                Desenvolvedor Full-Stack com formação em Análise de Sistemas, especializado em aplicações web modernas e escaláveis. Experiência com React.js, Angular.js, PHP, Laravel e MySQL. Competência em Docker, integração de APIs, otimização de performance, Git e metodologias Ágeis (Scrum e Kanban). Focado em entregar soluções que agregam valor ao negócio.
            </p>
            <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
                {/* Card Formação */}
                <div className="bg-gradient-to-br from-green-500/80  via-white to-green-500/80 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl border-2 border-green-500/80  p-8 flex-1 max-w-sm flex flex-col items-center mb-6 md:mb-0 hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-xl font-bold text-green-500/80 ">Formação</h3>
                    </div>
                    <ul className="list-none text-gray-700 dark:text-gray-200 mb-4 w-full text-left">
                        <li className="mb-2"><span className="font-semibold text-green-500/80 ">Graduação:</span> Análise de Sistemas de Computação – UNOPAR</li>
                    </ul>
                    <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-xl font-bold text-green-500/80 ">Certificados</h3>
                    </div>
                    <ul className="list-none text-gray-700 dark:text-gray-200 w-full text-left">
                        <li className="mb-2"><span className="font-semibold text-green-500/80 ">JavaScript:</span> Curso Completo (Udemy)</li>
                        <li className="mb-2"><span className="font-semibold text-green-500/80 ">SPA com Vue JS e API com Laravel:</span> Udemy</li>
                        <li className="mb-2"><span className="font-semibold text-green-500/80 ">PHP 8:</span> Hcode</li>
                        <li className="mb-2"><span className="font-semibold text-green-500/80 ">Dialogflow Completo:</span> Criação de Assistentes Virtuais (Udemy)</li>
                        <li><span className="font-semibold text-green-500/80 ">Hardware, Redes e Notebooks:</span> Microlins</li>
                    </ul>
                </div>
                {/* Card Competências */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg ring-1 ring-green-500/80  p-8 flex-1 max-w-sm flex flex-col items-center mb-6 md:mb-0 hover:scale-105 transition-transform">
                    <h3 className="text-xl font-bold text-green-500/80  mb-4">Competências</h3>
                    {/* Desenvolvimento Full-Stack */}
                    <h4 className="text-lg font-semibold text-green-500/80  mb-2 w-full">Desenvolvimento Full-Stack</h4>
                    <div className="flex flex-wrap gap-2 mb-4 w-full">
                        <span className="inline-flex w-fit items-center rounded-full bg-green-500/80/20 px-2 py-1 text-xs font-medium text-gray-400">React.js</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-green-500/80/20 px-2 py-1 text-xs font-medium text-gray-400">AngularJS</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-green-500/80/20 px-2 py-1 text-xs font-medium text-gray-400">PHP</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-green-500/80/20 px-2 py-1 text-xs font-medium text-gray-400">Laravel</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-green-500/80/20 px-2 py-1 text-xs font-medium text-gray-400">MySQL</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-green-500/80/20 px-2 py-1 text-xs font-medium text-gray-400">TypeScript</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-green-500/80/20 px-2 py-1 text-xs font-medium text-gray-400">HTML</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-green-500/80/20 px-2 py-1 text-xs font-medium text-gray-400">CSS</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-green-500/80/20 px-2 py-1 text-xs font-medium text-gray-400">JavaScript</span>
                    </div>
                    {/* DevOps */}
                    <h4 className="text-lg font-semibold text-green-500/80  mb-2 w-full">DevOps</h4>
                    <div className="flex flex-wrap gap-2 mb-4 w-full">
                        <span className="inline-flex w-fit items-center rounded-full bg-blue-400/20 px-2 py-1 text-xs font-medium text-gray-400">Docker</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-blue-400/20 px-2 py-1 text-xs font-medium text-gray-400">GitLab</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-blue-400/20 px-2 py-1 text-xs font-medium text-gray-400">CI/CD</span>
                    </div>
                    {/* Metodologias */}
                    <h4 className="text-lg font-semibold text-green-500/80  mb-2 w-full">Metodologias</h4>
                    <div className="flex flex-wrap gap-2 mb-4 w-full">
                        <span className="inline-flex w-fit items-center rounded-full bg-yellow-400/20 px-2 py-1 text-xs font-medium text-gray-400">Scrum</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-yellow-400/20 px-2 py-1 text-xs font-medium text-gray-400">Kanban</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-yellow-400/20 px-2 py-1 text-xs font-medium text-gray-400">Lean</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-yellow-400/20 px-2 py-1 text-xs font-medium text-gray-400">Kaizen</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-yellow-400/20 px-2 py-1 text-xs font-medium text-gray-400">5S</span>
                    </div>
                    {/* Redes */}
                    <h4 className="text-lg font-semibold text-green-500/80  mb-2 w-full">Redes</h4>
                    <div className="flex flex-wrap gap-2 mb-4 w-full">
                        <span className="inline-flex w-fit items-center rounded-full bg-gray-400/20 px-2 py-1 text-xs font-medium text-gray-400">TCP/IP</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-gray-400/20 px-2 py-1 text-xs font-medium text-gray-400">OSPF</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-gray-400/20 px-2 py-1 text-xs font-medium text-gray-400">VLANs</span>
                    </div>
                    {/* Outros */}
                    <h4 className="text-lg font-semibold text-green-500/80  mb-2 w-full">Outros</h4>
                    <div className="flex flex-wrap gap-2 w-full">
                        <span className="inline-flex w-fit items-center rounded-full bg-green-500/80/20 px-2 py-1 text-xs font-medium text-gray-400">Suporte Técnico</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-green-500/80/20 px-2 py-1 text-xs font-medium text-gray-400">Help Desk</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-green-500/80/20 px-2 py-1 text-xs font-medium text-gray-400">Gestão Logística</span>
                    </div>
                </div>
                {/* Card Experiências */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg ring-1 ring-green-500/80  p-8 flex-1 max-w-sm flex flex-col items-center mb-6 md:mb-0 hover:scale-105 transition-transform">
                    <h3 className="text-xl font-bold text-green-500/80  mb-4">Experiências</h3>
                    <div className="relative w-full">
                        <div className="border-l-2 border-green-500/80  ml-4">
                            {/* Timeline Item */}
                            <div className="mb-8 ml-6">
                                <div className="flex flex-col">
                                    <span className="text-green-500/80  font-semibold">Jun 2021 – Ago 2025</span>
                                    <span className="font-bold text-gray-800 dark:text-gray-200">Analista de Desenvolvimento Júnior – Giga+ Fibra</span>
                                    <span className="text-gray-600 dark:text-gray-300 text-sm">Desenvolvimento web com AngularJS e ReactJS, back-end com PHP/Laravel, integração via APIs RESTful, CI/CD com GitLab, containers Docker e gestão ágil com Jira.</span>
                                </div>
                            </div>
                            <div className="mb-8 ml-6">
                                <div className="flex flex-col">
                                    <span className="text-green-500/80  font-semibold">Jun 2021 – Abr 2022</span>
                                    <span className="font-bold text-gray-800 dark:text-gray-200">Técnico de TI – Giga+ Fibra</span>
                                    <span className="text-gray-600 dark:text-gray-300 text-sm">Estabilidade de sistemas, diagnóstico de incidentes, configuração de redes locais e suporte Help Desk.</span>
                                </div>
                            </div>
                            <div className="mb-8 ml-6">
                                <div className="flex flex-col">
                                    <span className="text-green-500/80  font-semibold">Set 2020 – Jun 2021</span>
                                    <span className="font-bold text-gray-800 dark:text-gray-200">Desenvolvedor / Operador de Rede – Redenet Telecom</span>
                                    <span className="text-gray-600 dark:text-gray-300 text-sm">Desenvolvimento de aplicações web, otimização de consultas SQL, coordenação de equipe com Trello.</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experiences;