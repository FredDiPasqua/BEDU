import React from 'react';
import '../assets/styles/components/Home.scss'
import temp from '../assets/atom.png'

const Home = () => {
    return (
    <>
        <nav className="navbar">
            <img className="logo" src={temp} alt="logo"/>
            <h1 className="brand" >Brand Name</h1>
            <h1 className="language" >ES </h1>

        </nav>
        <div className="search">
            <h1 className="searchText" >¿Que vamos a hacer hoy?</h1>
            <input className="searchBar" type="text" placeholder="Escribe una palabra para filtar los resultados"/>
            <button className="searchBtn" >🔍</button>
            <hr/>
        </div>
        <div className="results">
            <h1>Estos van a a ser resultados</h1>
            <h1>Estos van a a ser resultados</h1>
            <h1>Estos van a a ser resultados</h1>
            <h1>Estos van a a ser resultados</h1>
            <h1>Estos van a a ser resultados</h1>
            <h1>Estos van a a ser resultados</h1>
            <h1>Estos van a a ser resultados</h1>
        </div>
    </>
    )
};

export default Home;