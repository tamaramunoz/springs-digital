import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <div className="mt-3">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Financial Indicators</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="btn btn-dark" to="/indicators">Libra</Link>
                        <Link className="btn btn-dark" to="/indicators">Desempleo</Link>
                        <Link className="btn btn-dark" to="/indicators">Imacec</Link>
                        <Link className="btn btn-dark" to="/indicators">Euro</Link>
                        <Link className="btn btn-dark" to="/indicators">Dólar Observado</Link>
                        <Link className="btn btn-dark" to="/indicators">Dólar Acuerdo</Link>
                        <Link className="btn btn-dark" to="/indicators">Unidad Fomento</Link>
                        <Link className="btn btn-dark" to="/indicators">Unidad Tributaria</Link>
                        <Link className="btn btn-dark" to="/indicators">Bitcoin</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar