import foto from '@assets/foto.jpg'
import bg from '@assets/bg.png'

// Componente principal do cabeçalho da página
function Header() {
    return (
        // Container principal do header, ocupa toda a largura e altura mínima da tela
        <header className="w-full bg-zinc-900 flex flex-col justify-end items-start min-h-screen">
            {/* Bloco de fundo com imagem e sombra */}
            <div
                className="bg-cover bg-center min-h-screen self-stretch  mt-[-140px] relative flex flex-col items-center justify-center h-[920px]  shadow-2xl"
                style={{ backgroundImage: `url(${bg})` }}
            >
                {/* Container centralizado para apresentação e conteúdo do header */}
                <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 top-[120px] pb-20 relative flex flex-col justify-center items-center gap-10">
                    {/* Bloco principal de apresentação */}
                    <div className="w-full max-w-xl flex flex-col justify-start items-center gap-8">
                        {/* Foto de perfil com moldura e ícone */}
                        <section className="w-28 h-28 relative overflow-auto">
                            {/* Moldura circular decorativa */}
                            <div className="w-24 h-24 left-[8px] top-[8px] absolute rounded-[999px] outline-2 outline-red-400"></div>
                            {/* Imagem de perfil do usuário */}
                            <img
                                className="w-22 h-22 left-[12.36px] top-[12.36px] absolute rounded-full"
                                src={foto}
                                alt="Minha Foto"
                            />
                            {/* Ícone de código sobreposto à foto */}
                            <div className="w-8 h-8 left-[78px] top-[78px] absolute">
                                <img
                                    className="w-7 h-7 left-[0.50px] top-[3.50px] absolute outline-4 outline-zinc-900"
                                    src="./Code.svg"
                                    alt=""
                                />
                            </div>
                        </section>
                        {/* Seção de apresentação textual */}
                        <section className="self-stretch flex flex-col justify-start items-center gap-5">
                            {/* Saudação e título */}
                            <section className="w-full max-w-2xl mx-auto flex flex-col justify-start items-center gap-2 shadow-2xl px-4">
                                <section className="w-full text-center flex flex-wrap justify-center space-x-2">
                                    {/* Saudação e nome em destaque */}
                                    <span className="text-neutral-300 text-base sm:text-xl font-normal font-['Inconsolata'] leading-normal">
                                        Hello World! Meu nome é
                                    </span>
                                    <span className=" text-red-500 text-base sm:text-xl font-normal font-['Inconsolata'] leading-normal">
                                        Jusimar Alves
                                    </span>
                                    <span className="text-neutral-300 text-base sm:text-xl font-normal font-['Inconsolata'] leading-normal">
                                        e sou
                                    </span>
                                </section>
                                {/* Título principal de atuação */}
                                <h2 className="w-full text-center justify-center text-zinc-200 text-3xl sm:text-6xl font-bold font-['Asap'] leading-tight">
                                    Desenvolvedor Fullstack
                                </h2>
                            </section>
                            {/* Descrição pessoal do desenvolvedor */}
                            <section className="w-full max-w-2xl mx-auto text-center text-gray-400 text-base sm:text-lg font-normal font-['Maven_Pro'] leading-tight px-4">
                                <p className="self-stretch text-center justify-start">
                                    Transformo ideias em experiências digitais
                                    únicas, criando aplicações que encantam e
                                    facilitam o dia a dia das pessoas. Minha
                                    paixão por tecnologia me impulsiona a
                                    desenvolver soluções inovadoras, funcionais
                                    e impactantes, sempre buscando superar
                                    desafios e entregar resultados que fazem a
                                    diferença.
                                </p>
                            </section>
                        </section>
                        {/* Ícones de tecnologias e GitHub */}
                        <div className="flex flex-wrap justify-center sm:justify-start items-start gap-4  w-full ">
                            {/* Botão GitHub */}
                            <section className="px-4 py-2 bg-gray-800 rounded-[999px] flex justify-center items-center gap-2 hover:bg-[#384030] transition duration-300">
                                <section className="inline-flex w-7 h-7 relative px-7 items-center justify-between left-[-10px]">
                                    <img
                                        className="inline-flex w-5 h-5 left-[.1406rem] top-[.1556rem] absolute"
                                        src="/GitHub.svg"
                                        alt="logo_github"
                                    />
                                    <div className="inline-flex justify-start text-neutral-300 text-base font-normal font-['poppins'] leading-snug">
                                        GitHub
                                    </div>
                                </section>
                            </section>
                            {/* Botão HTML */}
                            <section className="px-4 py-2 bg-gray-800 rounded-[999px] flex justify-center items-center gap-2 hover:bg-[#384030] transition duration-300">
                                <section className="inline-flex w-7 h-7 relative px-7 items-center justify-between left-[-10px]">
                                    <img
                                        className="inline-flex w-5 h-5 left-[.2506rem] top-[.1875rem] absolute"
                                        src="/HTML.svg"
                                        alt="logo_html"
                                    />
                                    <div className="inline-flex justify-start text-neutral-300 text-base font-normal font-['poppins'] leading-snug">
                                        HTML
                                    </div>
                                </section>
                            </section>
                            {/* Botão CSS */}
                            <section className="px-4 py-2 bg-gray-800 rounded-[999px] flex justify-center items-center gap-2 hover:bg-[#384030] transition duration-300">
                                <section className="inline-flex w-7 h-7 relative px-7 items-center justify-between">
                                    <img
                                        className="inline-flex w-5 h-5 left-[4.07px] top-[3px] absolute"
                                        src="/CSS.svg"
                                        alt="logo_CSS"
                                    />
                                    <div className="inline-flex justify-start text-neutral-300 text-base font-normal font-['poppins'] leading-snug">
                                        CSS
                                    </div>
                                </section>
                            </section>
                            {/* Botão Javascript */}
                            <section className="px-4 py-2 bg-gray-800 rounded-[999px] flex justify-center items-center gap-2 hover:bg-[#384030] transition duration-300">
                                <section className="inline-flex w-28 h-7 relative px-7 items-center justify-around left-2">
                                    <img
                                        className="inline-flex w-5 h-4.5 left-[2.25px] top-[5.16px] absolute"
                                        src="/JavaScript.svg"
                                        alt="logo_javascript"
                                    />
                                    <div className="inline-flex justify-start text-neutral-300 text-base font-normal font-['Maven_Pro'] leading-snug">
                                        Javascript
                                    </div>
                                </section>
                            </section>
                            {/* Botão React */}
                            <section className="px-4 py-2 bg-gray-800 rounded-[999px] flex justify-center items-center gap-2 hover:bg-[#384030] transition duration-300">
                                <section className="inline-flex w-8 h-7 relative px-7 items-center justify-around left-[-8px]">
                                    <img
                                        className="inline-flex w-5 h-4.5 left-[2.25px] top-[3.43px] absolute"
                                        src="/React.svg"
                                        alt="logo_React"
                                    />
                                    <div className="inline-flex justify-start text-neutral-300 text-base font-normal font-['Maven_Pro'] leading-snug">
                                        React
                                    </div>
                                </section>
                            </section>
                            {/* Botão Node.js */}
                            <section className="px-4 py-2 bg-gray-800 rounded-[999px] flex justify-center items-center gap-2 hover:bg-[#384030] transition duration-300">
                                <section className="inline-flex w-8 h-7 relative px-7 items-center justify-around left-[-12px]">
                                    <img
                                        className="inline-flex w-5 h-4.5 left-[2.25px] top-[3.43px] absolute"
                                        src="/Node.js.svg"
                                        alt="logo_node.js"
                                    />
                                    <div className="inline-flex justify-start text-neutral-300 text-base font-normal font-['Maven_Pro'] leading-snug">
                                        Node.js
                                    </div>
                                </section>
                            </section>
                            {/* Botão Tailwind */}
                            <section className="px-4 py-2 bg-gray-800 rounded-[999px] flex justify-center items-center gap-2 hover:bg-[#384030] transition duration-300">
                                <section className="inline-flex w-28 h-7 relative px-7 items-center justify-around left-2">
                                    <img
                                        className="inline-flex w-5 h-4.5 left-[2.25px] top-[3.43px] absolute"
                                        src="/tailwind.svg"
                                        alt="logo_tailwind"
                                    />
                                    <div className="inline-flex justify-start text-neutral-300 text-base font-normal font-['Maven_Pro'] leading-snug">
                                        Tailwind
                                    </div>
                                </section>
                            </section>
                        </div>
                    </div>
                </div>
                {/* Ícone de seta para baixo para indicar rolagem */}
                <div className="w-full flex justify-center mt-16 sm:mt-24 md:mt-30 pb-10 ">
                    <div className="w-8 h-8 shadow-amber-300 flex items-center  justify-center">
                        <img
                            className="w-6 h-6"
                            src="/CaretDoubleDown.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

// Exporta o componente Header para uso em outros arquivos
export default Header
