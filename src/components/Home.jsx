import React from 'react'

// styles
import logo from '../images/logoIndicators.png'

const Home = () => {
    return (
        <div>
            <img src={logo} alt=""/>
            <h1>Bienvenidos a Indicadores Financieros</h1>

            <h5>Aquí podrás averiguar el valor actual de distintas monedas.</h5>
            <p>Para saber más información acerca de algun indicador simplemente haz click en su nombre y se despliegará toda la información disponible.</p>
        </div>
    )
}

export default Home
