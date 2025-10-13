import React, { useState } from 'react';

const Contacts = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const enviarWhatsApp = () => {
        const texto = `Olá, meu nome é ${nome}. Assunto: ${email}. Mensagem: ${mensagem}`;
        const url = `https://wa.me/5588993302318?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank');
    };

    return (
        <section id="contatos" className="mt-20 mb-20">
            <h2 className="text-3xl font-semibold text-green-500/80 mb-6 text-center">Contatos</h2>
            <div className="flex flex-col items-center gap-4">
                <p className="text-lg text-gray-500 mb-2 text-center">Fique à vontade para entrar em contato comigo!</p>
                <div className="w-full max-w-md mx-auto mb-6">
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Seu Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/80"
                        />
                        <input
                            type="email"
                            placeholder="Seu Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/80"
                        />
                        <textarea
                            placeholder="Sua Mensagem"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/80 h-24"
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
    )
}

export default Contacts;