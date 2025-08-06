// Importa o React para usar JSX e componentes
import React from 'react'
// Importa imagens usadas no componente

// Componente principal da aplicação
const App = () => {
    return (
        // Container principal: ocupa toda a largura, fundo escuro, flexbox em coluna, alinhamento inferior à esquerda
        <div class="self-stretch px-28 pt-32 pb-48 inline-flex flex-col justify-center items-center gap-12 overflow-hidden">
            <div class="flex flex-col justify-center items-start gap-2">
                <div class="self-stretch text-center justify-start text-purple-400 text-xl font-normal font-['Inconsolata'] leading-normal">
                    Contato
                </div>
                <div class="self-stretch text-center justify-start text-zinc-200 text-2xl font-bold font-['Asap'] leading-7">
                    Gostou do meu trabalho?{' '}
                </div>
                <div class="self-stretch text-center justify-start text-neutral-300 text-base font-normal font-['Maven_Pro'] leading-snug">
                    Entre em contato ou acompanhe as minhas redes sociais!
                </div>
            </div>
            <div class="flex flex-col justify-start items-start gap-4">
                <div
                    data-status="Default"
                    class="w-96 p-5 bg-gray-800 rounded-lg inline-flex justify-center items-center gap-3 overflow-hidden"
                >
                    <div class="w-7 h-7 relative overflow-hidden">
                        <div class="w-6 h-6 left-[2.62px] top-[2.62px] absolute bg-gray-400"></div>
                    </div>
                    <div class="flex-1 justify-start text-neutral-300 text-base font-medium font-['Maven_Pro'] leading-snug">
                        Linkedin
                    </div>
                    <div class="w-5 h-5 relative overflow-hidden">
                        <div class="w-3 h-3 left-[4.37px] top-[4.38px] absolute bg-blue-500"></div>
                    </div>
                </div>
                <div
                    data-status="Default"
                    class="w-96 p-5 bg-gray-800 rounded-lg inline-flex justify-center items-center gap-3 overflow-hidden"
                >
                    <div class="w-7 h-7 relative overflow-hidden">
                        <div class="w-6 h-6 left-[2.62px] top-[2.62px] absolute bg-gray-400"></div>
                    </div>
                    <div class="flex-1 justify-start text-neutral-300 text-base font-medium font-['Maven_Pro'] leading-snug">
                        Instagram
                    </div>
                    <div class="w-5 h-5 relative overflow-hidden">
                        <div class="w-3 h-3 left-[4.37px] top-[4.38px] absolute bg-blue-500"></div>
                    </div>
                </div>
                <div
                    data-status="Default"
                    class="w-96 p-5 bg-gray-800 rounded-lg inline-flex justify-center items-center gap-3 overflow-hidden"
                >
                    <div class="w-7 h-7 relative overflow-hidden">
                        <div class="w-6 h-6 left-0 top-[2.62px] absolute bg-gray-400"></div>
                    </div>
                    <div class="flex-1 justify-start text-neutral-300 text-base font-medium font-['Maven_Pro'] leading-snug">
                        GitHub
                    </div>
                    <div class="w-5 h-5 relative overflow-hidden">
                        <div class="w-3 h-3 left-[4.37px] top-[4.38px] absolute bg-blue-500"></div>
                    </div>
                </div>
                <div
                    data-status="Default"
                    class="w-96 p-5 bg-gray-800 rounded-lg inline-flex justify-center items-center gap-3 overflow-hidden"
                >
                    <div class="w-7 h-7 relative overflow-hidden">
                        <div class="w-6 h-4 left-[2.62px] top-[5.25px] absolute bg-gray-400"></div>
                    </div>
                    <div class="flex-1 justify-start text-neutral-300 text-base font-medium font-['Maven_Pro'] leading-snug">
                        E-mail
                    </div>
                    <div class="w-5 h-5 relative overflow-hidden">
                        <div class="w-3 h-3 left-[4.37px] top-[4.38px] absolute bg-blue-500"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Exporta o componente para ser usado em outros arquivos
export default App
