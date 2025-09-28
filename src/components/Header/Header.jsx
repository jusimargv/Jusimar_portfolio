import foto from '@assets/foto.jpg'
import bg from '@assets/bg.png'

const technologies = [
    {
        name: 'HTML',
        icon: '/HTML.svg'
    },
    {
        name: 'CSS',
        icon: '/CSS.svg'
    },
    {
        name: 'JavaScript',
        icon: '/JavaScript.svg'
    },
    {
        name: 'React',
        icon: '/React.svg'
    },
    {
        name: 'Node.js',
        icon: '/Node.js.svg'
    },
    {
        name: 'Tailwind',
        icon: '/tailwind.svg'
    }
]

function Header() {
    return (
        <header 
            className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(24, 24, 27, 0.9), rgba(24, 24, 27, 0.95)), url(${bg})`,
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <section className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Seção de apresentação */}
                    <section className="w-full md:w-1/2 space-y-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 animate-fadeIn">
                            Desenvolvedor Full Stack
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed animate-fadeIn delay-200">
                            Minha paixão por tecnologia me impulsiona a desenvolver soluções inovadoras,
                            funcionais e impactantes, sempre buscando superar desafios e entregar
                            resultados que fazem a diferença.
                        </p>
                        
                        {/* Stack de tecnologias */}
                        <div className="flex flex-wrap gap-4 pt-4 animate-fadeIn delay-300">
                            {technologies.map((tech) => (
                                <div 
                                    key={tech.name} 
                                    className="px-4 py-2 bg-zinc-800/50 backdrop-blur-sm rounded-full flex items-center gap-2 hover:bg-indigo-500 transition-all duration-300 hover:scale-105"
                                >
                                    <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                                    <span className="text-zinc-200">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                        
                        {/* Botões de ação */}
                        <div className="flex flex-wrap gap-4 pt-8 animate-fadeIn delay-400">
                            <a 
                                href="#projetos" // Este link direciona para a seção com id="projetos"
                                className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-500/50"
                            >
                                Ver Projetos
                            </a>
                            <a 
                                href="#servicos" // Este link direciona para a seção com id="servicos"
                                className="px-6 py-3 border-2 border-indigo-500 hover:bg-indigo-500/10 rounded-full text-white font-semibold transition-all duration-300 shadow-lg"
                            >
                                Contato
                            </a>
                        </div>
                    </section>
                    
                    {/* Imagem de perfil */}
                    <section className="w-full md:w-1/2 flex justify-center animate-fadeIn delay-500">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
                            <img 
                                src={foto}
                                alt="Foto de perfil" 
                                className="absolute inset-2 rounded-full object-cover hover:scale-105 transition-transform duration-300 shadow-2xl"
                            />
                        </div>
                    </section>
                </section>
            </div>
        </header>
    )
}

export default Header
