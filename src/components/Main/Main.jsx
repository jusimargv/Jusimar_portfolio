import { useState, useEffect } from 'react'
import tecblog from '@assets/tecblog.png'
import unes from '@assets/unes.png'
import museu from '@assets/museu.png'
import anna from '@assets/anna_bella.png'
import chale from '@assets/chale_hotel.png'
import noticias from '@assets/noticias.png'

const projects = [
    {
        id: 1,
        title: 'Notícias Cidade',
        image: noticias,
        description: 'Site de notícias local com seções para manchetes, notícias recentes, destaques e colunas.',
        preview: 'https://jusimargv.github.io/noticias-cidade/',
        technologies: ['HTML', 'CSS']
    },
    {
        id: 2,
        title: 'TecBlog',
        image: tecblog,
        description: 'Plataforma dedicada à publicação de notícias, dicas e tutoriais do universo da tecnologia.',
        preview: 'https://jusimargv.github.io/Site_TecBlog/',
        technologies: ['HTML', 'CSS']
    },
    {
        id: 3,
        title: 'Anna Bella',
        image: anna,
        description: 'Site profissional para modelo, com galeria de fotos e informações sobre campanhas publicitárias.',
        preview: 'https://jusimargv.github.io/Anna_Bella_Official/',
        technologies: ['HTML', 'CSS']
    },
    {
        id: 4,
        title: 'Universidade Unes',
        image: unes,
        description: 'Portal universitário com informações sobre cursos, processo seletivo e vida acadêmica.',
        preview: 'https://jusimargv.github.io/universidade/',
        technologies: ['HTML', 'CSS']
    },
    {
        id: 5,
        title: 'Chalé Hotel',
        image: chale,
        description: 'Site para hotel com apresentação de acomodações, serviços e reservas.',
        preview: 'https://jusimargv.github.io/chale_hotel/',
        technologies: ['HTML', 'CSS']
    },
    {
        id: 6,
        title: 'Museu Nacional',
        image: museu,
        description: 'Portal do museu com exposições, eventos e informações históricas.',
        preview: 'https://jusimargv.github.io/museu_nacional.github.io/',
        technologies: ['HTML', 'CSS']
    }
]

function ProjectCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(3)

    // Atualiza o número de itens por página baseado no tamanho da tela
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setItemsPerPage(1) // Apenas 1 item por página no mobile (um embaixo do outro)
            } else {
                setItemsPerPage(3) // 3 itens por página no desktop
            }
        }

        handleResize() // Executa ao montar
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const totalPages = Math.ceil(projects.length / itemsPerPage)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex + itemsPerPage >= projects.length ? 0 : prevIndex + itemsPerPage
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex - itemsPerPage < 0 ? projects.length - itemsPerPage : prevIndex - itemsPerPage
        )
    }

    const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage)

    return (
        <div className="relative w-full">
            <div className="flex justify-between items-center gap-4">
                {/* Botão Anterior */}
                <button 
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors"
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Container dos Projetos */}
                <div className="flex-1 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-300 ease-in-out">
                        {visibleProjects.map((project) => (
                            <div 
                                key={project.id}
                                className="w-full"
                            >
                                <div className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-zinc-200 mb-2">{project.title}</h3>
                                        <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech) => (
                                                <span 
                                                    key={tech}
                                                    className="px-2 py-1 bg-zinc-700 rounded-full text-xs text-zinc-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <a
                                            href={project.preview}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block w-full text-center bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                                        >
                                            Ver Preview
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botão Próximo */}
                <button 
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors"
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Indicadores de página */}
            <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index * itemsPerPage)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            index === Math.floor(currentIndex / itemsPerPage)
                                ? 'bg-indigo-500'
                                : 'bg-zinc-600'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}

const services = [
    {
        title: 'Websites e Aplicativos',
        description: 'Desenvolvimento de interfaces modernas e responsivas',
        icon: '/Devices.svg'
    },
    {
        title: 'APIs e Banco de Dados',
        description: 'Análise e gerenciamento de dados',
        icon: '/HardDrives.svg'
    },
    {
        title: 'AWS Cloud Practitioner',
        description: 'Soluções em nuvem seguras',
        icon: '/Code.svg'
    }
]

function ProjectCard({ project }) {
    return (
        <article className="w-full sm:w-80 bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20">
            <div className="relative group">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-6">
                    <h3 className="text-xl font-bold text-zinc-200 mb-2">{project.title}</h3>
                    <p className="text-zinc-400 text-sm">{project.description}</p>
                    <a
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                        Ver Preview
                    </a>
                </div>
            </div>
        </article>
    )
}

function Main() {
    return (
        <main className="w-full bg-zinc-900">
            {/* Seção de Projetos */}
            <section id="projetos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                        Projetos em Destaque
                    </h2>
                    <p className="mt-4 text-lg text-zinc-400">
                        Conheça alguns dos meus trabalhos mais recentes
                    </p>
                </div>
                
                <ProjectCarousel />
            </section>

            {/* Seção de Serviços (ou Contato) */}
            <section id="servicos" className="bg-zinc-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                            Meus Serviços
                        </h2>
                        <p className="mt-4 text-lg text-zinc-400">
                            Como posso ajudar a impulsionar seu projeto
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div 
                                key={service.title}
                                className="p-6 bg-zinc-900 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
                            >
                                <img 
                                    src={service.icon} 
                                    alt={service.title}
                                    className="w-12 h-12 mb-4"
                                />
                                <h3 className="text-xl font-bold text-zinc-200 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-zinc-400">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main
