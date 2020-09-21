import React from 'react';
import '../assets/styles/components/Home.scss'
import temp from '../assets/atom.png'
import CardTrend from './CardTrend';
import Results from './Results';
import LogIn from './LogIn'

const Home = () => {
    let modal = true

    const handleModal = () => {
        if (modal) {
            modal = false
        }
        else {
            modal = true
        }
    }

    return (
    <>
        <nav className="navbar">
            <img className="logo" src={temp} alt="logo"/>
            <h1 className="brand" >Brand Name</h1>
            <button className="loginlink" onClick={handleModal} >Inicia sesión</button>
            <LogIn isOpen={modal} onClose={handleModal} >Aqui va el contenido </LogIn>
            <h3 className="language" >ES </h3>

        </nav>
        <div className="search">
            <h1 className="searchText" >¿Que vamos a hacer hoy?</h1>
            <input className="searchBar" type="text" placeholder="Escribe una palabra para filtar los resultados"/>
            <button className="searchBtn" >🔍</button>
            <hr/>
        </div>
        <div className="container">
            <div className="results">
                <Results />
                <Results />
                <Results />
                <Results />
            </div>
            <div className="trends">
                <CardTrend />
                <CardTrend />
                <CardTrend />
            </div>
        </div>
    </>
    )
};

export default Home;