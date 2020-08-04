import React from 'react'
import { Link } from 'react-router-dom'

// styles
import '../styles/Navbar.css'




const Navbar = () => {

    return (
        <div className="mt-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <Link className="navbar-brand" to="/">Indicadores</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className="btn btn-success" to="/indicators">Libra</Link>
                        <Link className="btn btn-success" to="/indicators">Desempleo</Link>
                        <Link className="btn btn-success" to="/indicators">Imacec</Link>
                        <Link className="btn btn-success" to="/indicators">Euro</Link>
                        <Link className="btn btn-success" to="/indicators">Dólar Observado</Link>
                        <Link className="btn btn-success" to="/indicators">Dólar Acuerdo</Link>
                        <Link className="btn btn-success" to="/indicators">Unidad Fomento</Link>
                        <Link className="btn btn-success" to="/indicators">Unidad Tributaria</Link>
                        <Link className="btn btn-success" to="/indicators">Bitcoin</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar