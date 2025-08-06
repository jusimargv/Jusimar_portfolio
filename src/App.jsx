// Importa o React para usar JSX e componentes
import React from 'react'
import Header from '@components/Header/Header'
import Main from '@components/Main/Main'
import Footer from '@components/Footer/Footer'

// Importa imagens usadas no componente

// Componente principal da aplicação
const App = () => {
    return (
        // Container principal: ocupa toda a largura, fundo escuro, flexbox em coluna, alinhamento inferior à esquerda
        <div className="w-full bg-zinc-900 flex flex-col justify-end items-start min-h-screen">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

// Exporta o componente para ser usado em outros arquivos
export default App
