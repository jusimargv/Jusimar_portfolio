import tecblog from '@assets/tecblog.png'
import unes from '@assets/unes.png'
import museu from '@assets/museu.png'
import anna from '@assets/anna_bella.png'
import chale from '@assets/chale_hotel.png'
import noticias from '@assets/noticias.png'

// Componente principal da página Main
function Main() {
    return (
        // Container principal do conteúdo da página
        <main className="w-full bg-zinc-900 flex flex-col justify-end items-start min-h-screen ">
            {/* Container central com títulos e grid de projetos */}
            <div className="self-stretch px-4 sm:px-10 md:px-20 lg:px-28 pb-4 flex flex-col justify-center h-auto items-center space-y-5 overflow-y-auto overscroll-y-auto sm:overflow-y-auto md:overflow-y-auto lg:overflow-y-auto">
                {/* Títulos da seção de projetos */}
                <section className="w-full max-w-4xl mx-auto flex flex-col justify-start items-center space-y-3 px-4">
                    <h1 className="w-full text-center text-red-400 text-xl sm:text-2xl font-normal font-['Inconsolata'] leading-normal">
                        Meu trabalho
                    </h1>
                    <h2 className="w-full text-center text-zinc-200 text-2xl sm:text-3xl font-bold font-['Maven_Pro'] leading-snug">
                        Veja os projetos em destaque
                    </h2>
                </section>
                {/* Grid responsivo de cards de projetos */}
                <section className="w-full max-w-5xl  flex flex-wrap justify-center items-start gap-6">
                    {/* Card: Notícias Cidade */}
                    <section className="w-full sm:w-80 h-83 p-2 bg-gray-800 rounded-xl flex flex-col justify-start items-center space-y-1 hover:border-indigo-500 hover:border transition duration-300">
                        {/* Imagem do projeto */}
                        <img
                            className="w-full h-40 rounded-lg object-cover"
                            src={noticias}
                            alt="capa_cidade"
                        />
                        {/* Conteúdo textual do card */}
                        <section className="self-stretch p-1 flex flex-col justify-start items-center gap-2 ">
                            <h3 className="self-stretch justify-start text-zinc-200 text-base font-bold font-['Maven_Pro'] leading-tight">
                                Notícias Cidade
                            </h3>
                            <p className="self-stretch justify-start text-neutral-300  text-sm md:text-sm font-normal font=['Maven_Pro'] leading-tight ">
                                Desenvolvido para praticar e demonstrar
                                habilidades em HTML e CSS. O site apresenta um
                                layout simples e fixo, voltado apenas para fins
                                de aprendizado, simulando um portal de notícias
                                local com seções para manchetes, notícias
                                recentes, destaques, colunas e informações de
                                contato.
                                {/* Botão de preview do projeto */}
                                <a
                                    href="https://jusimargv.github.io/noticias-cidade/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-19 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-0.5 px-2 rounded transition duration-300 "
                                >
                                    Preview
                                </a>
                            </p>
                        </section>
                    </section>
                    {/* Card: TecBlog */}
                    <section className="w-full sm:w-80 h-83 p-2 bg-gray-800 rounded-xl  flex flex-col justify-start items-center space-y-1 hover:border-indigo-500 hover:border transition duration-300">
                        {/* Imagem do projeto */}
                        <img
                            className="w-full h-40 rounded-lg object-cover"
                            src={tecblog}
                            alt=""
                        />
                        {/* Conteúdo textual do card */}
                        <section className="self-stretch p-1 flex flex-col justify-start items-center gap-2  ">
                            <h3 className="self-stretch justify-start text-zinc-200 text-base font-bold font-['Maven_Pro'] leading-tight">
                                TecBlog
                            </h3>
                            <p className="self-stretch justify-start text-neutral-300  text-sm md:text-sm font-normal font=['Maven_Pro'] leading-tight ">
                                O TecBlog é uma plataforma dedicada à publicação
                                de notícias, dicas, tutoriais e novidades do
                                universo da tecnologia. O objetivo é criar um
                                espaço colaborativo para entusiastas, estudantes
                                e profissionais compartilharem conhecimento e se
                                manterem atualizados.
                                {/* Botão de preview do projeto */}
                                <a
                                    href="https://jusimargv.github.io/Site_TecBlog/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-38 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-0.5 px-2 rounded transition duration-300 "
                                >
                                    Preview
                                </a>
                            </p>
                        </section>
                    </section>
                    {/* Card: Anna Bella */}
                    <section className="w-full sm:w-80 h-83 p-2 bg-gray-800 rounded-xl flex flex-col justify-start items-center space-y-1 hover:border-indigo-500 hover:border transition duration-300">
                        {/* Imagem do projeto */}
                        <img
                            className="w-full h-40 rounded-lg object-cover"
                            src={anna}
                            alt=""
                        />
                        {/* Conteúdo textual do card */}
                        <section className="self-stretch p-1 flex flex-col justify-start items-center gap-2 ">
                            <h3 className="self-stretch justify-start text-zinc-200 text-base font-bold font-['Maven_Pro'] leading-tight">
                                Anna Bella
                            </h3>
                            <p className="self-stretch justify-start text-neutral-300  text-sm md:text-sm font-normal font=['Maven_Pro'] leading-tight ">
                                Projeto Site portfólio desenvolvido para
                                apresentar o trabalho, a carreira e os contatos
                                profissionais da modelo Anna Bella. O objetivo é
                                criar uma presença digital elegante, responsiva
                                e de fácil navegação, destacando fotos,
                                biografia, depoimentos e formas de contato.
                                {/* Botão de preview do projeto */}
                                <a
                                    href="https://jusimargv.github.io/Anna_Bella_Official/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-44 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-0.5 px-2 rounded transition duration-300 "
                                >
                                    Preview
                                </a>
                            </p>
                        </section>
                    </section>
                    {/* Card: Universidade Unes */}
                    <section className="w-full sm:w-80 h-83 p-2 bg-gray-800 rounded-xl flex flex-col justify-start items-center space-y-1 hover:border-indigo-500 hover:border transition duration-300">
                        {/* Imagem do projeto */}
                        <img
                            className="w-full h-40 rounded-lg object-cover"
                            src={unes}
                            alt=""
                        />
                        {/* Conteúdo textual do card */}
                        <section className="self-stretch p-1 flex flex-col justify-start items-center space-y-1 ">
                            <h3 className="self-stretch justify-start text-zinc-200 text-base font-bold font-['Maven_Pro'] leading-tight">
                                Universidade Unes
                            </h3>
                            <p className="self-stretch justify-start text-neutral-300  text-sm md:text-sm font-normal font=['Maven_Pro'] leading-tight ">
                                Este projeto apresenta um layout responsivo para
                                um site universidade, desenvolvido com HTML5 e
                                CSS3. O design combina elementos modernos com
                                uma estética rústica e acolhedora, perfeita para
                                representar um estabelecimento hoteleiro que
                                valoriza o conforto e a natureza.
                                {/* Botão de preview do projeto */}
                                <a
                                    href="https://jusimargv.github.io/universidade/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-23  inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-0.5 px-2 rounded transition duration-300 "
                                >
                                    Preview
                                </a>
                            </p>
                        </section>
                    </section>
                    {/* Card: Chalé Hotel */}
                    <section className="w-full sm:w-80 h-83 p-2 bg-gray-800 rounded-xl flex flex-col justify-start items-center space-y-1 hover:border-indigo-500 hover:border transition duration-300">
                        {/* Imagem do projeto */}
                        <img
                            className="w-full h-40 rounded-lg object-cover"
                            src={chale}
                            alt=""
                        />
                        {/* Conteúdo textual do card */}
                        <section className="self-stretch p-1 flex flex-col justify-start items-center gap-2 ">
                            <h3 className="self-stretch justify-start text-zinc-200 text-base font-bold font-['Maven_Pro'] leading-tight">
                                Chalé Hotel
                            </h3>
                            <p className="self-stretch justify-start text-neutral-300  text-sm md:text-sm font-normal font=['Maven_Pro'] leading-tight ">
                                Este projeto apresenta um layout responsivo para
                                um site de hotel chalé, desenvolvido com HTML5 e
                                CSS3. O design combina elementos modernos com
                                uma estética rústica e acolhedora, perfeita para
                                representar um estabelecimento hoteleiro que
                                valoriza o conforto e a natureza.
                                {/* Botão de preview do projeto */}
                                <a
                                    href="https://jusimargv.github.io/chale-hotel/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-22 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-0.5 px-2 rounded transition duration-300 "
                                >
                                    Preview
                                </a>
                            </p>
                        </section>
                    </section>
                    {/* Card: Museu Nacional */}
                    <section className="w-full sm:w-80 h-83 p-2 bg-gray-800 rounded-xl flex flex-col justify-start items-center space-y-1 hover:border-indigo-500 hover:border transition duration-300">
                        {/* Imagem do projeto */}
                        <img
                            className="w-full h-40 rounded-lg object-cover"
                            src={museu}
                            alt=""
                        />
                        {/* Conteúdo textual do card */}
                        <section className="self-stretch p-1 flex flex-col justify-start items-center gap-2 ">
                            <h3 className="self-stretch justify-start text-zinc-200 text-base font-bold font-['Maven_Pro'] leading-tight">
                                Museu Nacional
                            </h3>
                            <p className="self-stretch justify-start text-neutral-300  text-sm md:text-sm font-normal font=['Maven_Pro'] leading-tight ">
                                Este projeto apresenta um layout responsivo para
                                um site de hotel chalé, desenvolvido com HTML5 e
                                CSS3. O design combina elementos modernos com
                                uma estética rústica e acolhedora, perfeita para
                                representar um estabelecimento hoteleiro que
                                valoriza o conforto e a natureza.
                                {/* Botão de preview do projeto */}
                                <a
                                    href="https://jusimargv.github.io/museu_nacional.github.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-23 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-0.5 px-2 mb-1 rounded transition duration-300 "
                                >
                                    Preview
                                </a>
                            </p>
                        </section>
                    </section>
                </section>
            </div>
            {/* Seção de serviços oferecidos */}
            <div className="self-stretch px-28 pt-20 pb-28 bg-neutral-950 inline-flex flex-col justify-center items-center gap-14 overflow-hidden">
                {/* Título e subtítulo dos serviços */}
                <section className="flex flex-col justify-center items-start gap-2">
                    <h4 className='self-stretch text-center justify-start text-red-400 text-xl font-normal font-["Inconsolata"] leading-normal'>
                        Meus Serviços
                    </h4>
                    <span className="self-stretch text-center jusatify-start text-zinc-200 text-2xl font-bold">
                        Como posso ajudar contribuir com seu time.
                    </span>
                </section>
                {/* Grid de serviços */}
                <div className="inline-flex justify-center items-start gap-6 flex-wrap content-start">
                    {/* Card de serviço: Websites e Aplicativos */}
                    <section className="w-72 p-5 rounded-xl  outline-2 outline-offset-[-2px] outline-zinc-900 inline-flex flex-col justify-center items-start gap-5 overflow-hidden  hover:bg-indigo-500 transition duration-300">
                        <div className="w-12 h-12 relative overflow-hidden">
                            <img
                                className="w-11 h-8 left-[3px] top-[7.50px] absolute"
                                src="./Devices.svg"
                                alt="logo-devices"
                            />
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-center gap-2">
                            <h4 className='self-stretch justify-start text-zinc-200 text-base font-bold font-["Asap"] leading-tight'>
                                Websites e Aplicativos
                            </h4>
                            <span className='self-stretch justify-start text-neutral-300 text-sm font-normal font-["Maven_Pro"] leading-tight'>
                                Desenvolvimento de interfaces
                            </span>
                        </div>
                    </section>
                    {/* Card de serviço: APIs e Banco de Dados */}
                    <section className="w-72 p-5 rounded-xl  outline-2 outline-offset-[-2px] outline-zinc-900 inline-flex flex-col justify-center items-start gap-5 overflow-hidden  hover:bg-indigo-500 transition duration-300">
                        <div className="w-12 h-12 relative overflow-hidden">
                            <img
                                className="w-11 h-8 left-[3px] top-[7.50px] absolute"
                                src="./HardDrives.svg"
                                alt="logo-HardDrives"
                            />
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-center gap-2">
                            <h4 className='self-stretch justify-start text-zinc-200 text-base font-bold font-["Asap"] leading-tight'>
                                APIs e Banco de Dados
                            </h4>
                            <span className='self-stretch justify-start text-neutral-300 text-sm font-normal font-["Maven_Pro"] leading-tight'>
                                Analises de grandes volumes de dados{''}
                            </span>
                        </div>
                    </section>
                    {/* Card de serviço: AWS Cloud Practitioner */}
                    <section className="w-72 p-5 rounded-xl  outline-2 outline-offset-[-2px] outline-zinc-900 inline-flex flex-col justify-center items-start gap-5 overflow-hidden hover:bg-indigo-500 transition duration-300">
                        <div className="w-12 h-12 relative overflow-hidden">
                            <img
                                className="w-11 h-8 left-[3px] top-[7.50px] absolute"
                                src="./Devices.svg"
                                alt="logo-devices"
                            />
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-center gap-2">
                            <h4 className='self-stretch justify-start text-zinc-200 text-base font-bold font-["Asap"] leading-tight'>
                                AWS Cloud Practitioner
                            </h4>
                            <span className='self-stretch justify-start text-neutral-300 text-sm font-normal font-["Maven_Pro"] leading-tight'>
                                Soluções em nuvem seguras.
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

// Exporta o componente Main para uso em outros arquivos
export default Main
