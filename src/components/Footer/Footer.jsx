import bg_footer from '@assets/bg_footer.png'
// Importa a imagem de background do footer

function Footer() {
    return (
        // Elemento <footer> principal, define o rodapé ocupando toda a largura e altura mínima da tela, com padding e cor de fundo escura
        <footer className="w-full bg-zinc-900 flex flex-col justify-end items-start min-h-screen relative">
            <div
                // Div principal do conteúdo do footer, com background image, padding e alinhamento centralizado
                className="bg-cover bg-center min-h-screen self-stretch px-28 pt-32 pb-48 inline-flex flex-col justify-center items-center gap-12 overflow-hidden"
                style={{ backgroundImage: `url(${bg_footer})` }}
            >
                {/* Seção de título e chamada para ação */}
                <section className="flex flex-col justify-center items-start gap-2">
                    <h3 className="self-stretch text-center justify-start text-purple-400 text-xl font-normal font-['Inconsolata'] leading-normal">
                        Contato
                    </h3>
                    <h2 className="self-stretch text-center justify-start text-zinc-200 text-2xl font-bold font-['Asap'] leading-7">
                        Gostou do meu trabalho?{' '}
                    </h2>
                    <span className=" self-stretch text-center justify-start text-neutral-300 text-base font-normal font-['Maven_Pro'] leading-snug">
                        Entre em contato ou acompanhe as minhas redes sociais!
                    </span>
                </section>
                {/* Seção de links sociais e contato */}
                <section className="flex flex-col justify-start items-center gap-4 w-full">
                    {/* Linkedin */}
                    <section className="w-full max-w-96 p-5 bg-gray-800 rounded-lg inline-flex justify-center items-center gap-3 overflow-hidden">
                        <div className="w-7 h-7 relative overflow-hidden">
                            {/* Ícone do Linkedin */}
                            <img
                                className="w-6 h-6 left-[2.62px] top-[2.62px] absolute"
                                src="./LinkedinLogo.svg"
                                alt="logo Linkedin"
                            />
                        </div>
                        <span className='flex-1 justify-start text-neutral-300  text-base font-medium font-["Maven_Pro"] leading-snug'>
                            Linkedin
                        </span>
                        {/* Link externo para o perfil Linkedin */}
                        <a
                            href="https://www.linkedin.com/in/jusimar-alves"
                            className="w-5 h-5 relative overflow-hidden cursor-pointer hover:text-amber-200 transition duration-300"
                        >
                            {/* Ícone de seta indicando link externo */}
                            <img
                                className="w-3h-3 left-[4.37px] top-[4.38px] shadow-blue-300 absolute"
                                src="./ArrowUpRight.svg"
                                alt=" seta para cima"
                            />
                        </a>
                    </section>
                    {/* Instagram */}
                    <section className="w-full max-w-96 p-5 bg-gray-800 rounded-lg inline-flex justify-center items-center gap-3 overflow-hidden">
                        <div className="w-7 h-7 relative overflow-hidden">
                            {/* Ícone do Instagram */}
                            <img
                                className="w-6 h-6 left-[2.62px] top-[2.62px] absolute"
                                src="./InstagramLogo.svg"
                                alt=" logo instagram"
                            />
                        </div>
                        <span className='flex-1 justify-start text-neutral-300  transition duration-300 text-base font-medium font-["Maven_Pro"] leading-snug'>
                            Instagram
                        </span>
                        {/* Link externo para o perfil Instagram */}
                        <a
                            href="https://www.instagram.com/Dev_jusimar"
                            className="w-5 h-5 relative overflow-hidden cursor-pointer hover:text-amber-200 transition duration-300"
                        >
                            {/* Ícone de seta indicando link externo */}
                            <img
                                className="w-3h-3 left-[4.37px] top-[4.38px] absolute"
                                src="./ArrowUpRight.svg"
                                alt="seta para cima"
                            />
                        </a>
                    </section>
                    {/* Github */}
                    <section className="w-full max-w-96 p-5 bg-gray-800 rounded-lg inline-flex justify-center items-center gap-3 overflow-hidden">
                        <div className="w-7 h-7 relative overflow-hidden">
                            {/* Ícone do Github */}
                            <img
                                className="w-6 h-6 left-[2.62px] top-[2.62px] absolute"
                                src="./GithubLogo.svg"
                                alt="logo github"
                            />
                        </div>
                        <span className='flex-1 justify-start text-neutral-300 text-base font-medium font-["Maven_Pro"] leading-snug'>
                            Github
                        </span>
                        {/* Link externo para o perfil Github */}
                        <a
                            href="https://github.com/Jusimargv"
                            className="w-5 h-5 relative overflow-hidden cursor-pointer hover:text-amber-200 transition duration-300"
                        >
                            {/* Ícone de seta indicando link externo */}
                            <img
                                className="w-3h-3 left-[4.37px] top-[4.38px] absolute"
                                src="./ArrowUpRight.svg"
                                alt="seta para cima"
                            />
                        </a>
                    </section>
                    {/* E-mail */}
                    <section className="w-full max-w-96 p-5 bg-gray-800 rounded-lg inline-flex justify-center items-center gap-3 overflow-hidden">
                        <div className="w-7 h-7 relative overflow-hidden">
                            {/* Ícone de envelope para e-mail */}
                            <img
                                className="w-6 h-6 left-[2.62px] top-[2.62px] absolute"
                                src="./EnvelopeSimple.svg"
                                alt=""
                            />
                        </div>
                        <span className='flex-1 justify-start text-neutral-300 text-base font-medium font-["Maven_Pro"] leading-snug'>
                            E-mail
                        </span>
                        {/* Link mailto para enviar e-mail */}
                        <a
                            href="mailto:jusimargv@gmail.com"
                            className="w-5 h-5 relative overflow-hidden cursor-pointer hover:text-amber-200 transition duration-300"
                        >
                            {/* Ícone de seta indicando ação */}
                            <img
                                className="w-3h-3 left-[4.37px] top-[4.38px] absolute"
                                src="./ArrowUpRight.svg"
                                alt=""
                            />
                        </a>
                    </section>
                </section>
            </div>
            {/* Texto de copyright */}
            <p className='self-stretch text-center justify-start text-neutral-300 text-xl font-normal font-["Maven_Pro"] leading-snug'>
                &copy; 2025 <span className='text-red-400'>Dev_Jusimar</span>. Todos os direitos reservados.
            </p>

            {/* WhatsApp floating button */}
            <a
                href="https://wa.me/+5519989233452"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 p-4 shadow-lg transition-colors hover:right-10 hover:bottom-10 duration-300"
            >
                <img
                    src="./whatsapp.svg"
                    alt="WhatsApp"
                    className="w-20 h-20 rounded-full hover:w-25 hover:h-25 transition duration-300 hover:shadow-xl "
                />
            </a>
        </footer>
    )
}

export default Footer
// Exporta o componente Footer para uso em outros arquivos
