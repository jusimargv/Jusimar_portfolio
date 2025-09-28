import React from 'react'
import Header from '@components/Header/Header'
import Main from '@components/Main/Main'
import Footer from '@components/Footer/Footer'

const App = () => {
    return (
        <div className="w-full bg-zinc-900 flex flex-col justify-end items-start min-h-screen transition-all duration-300">
            {/* Adicionando fade-in animation nos componentes principais */}
            <div className="w-full animate-fadeIn">
                <Header />
                <Main />
                <Footer />
            </div>
        </div>
    )
}

export default App
