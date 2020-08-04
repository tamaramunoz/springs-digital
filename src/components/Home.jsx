import React from 'react'

// styles
import logo from '../images/logoIndicators.png'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <img src={logo} alt=""/>
            <h1 className="main-title-home">Bienvenidos a Indicadores Financieros</h1>

            <h5 className="subtitle-home">Aquí podrás averiguar el valor actual de distintas monedas.</h5>
            <p className="description-home">Para saber más información acerca de algun indicador simplemente haz click en su nombre y se despliegará toda la información disponible.</p>
        </div>
    )
}

export default Home
