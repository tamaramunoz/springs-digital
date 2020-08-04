import React from 'react'


const Navbar = () => {

    return (
        <div className="mt-3">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Financial Indicators</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <button className="btn btn-dark" >Libra</button>
                        <button className="btn btn-dark" >Desempleo</button>
                        <button className="btn btn-dark" >Imacec</button>
                        <button className="btn btn-dark" >Euro</button>
                        <button className="btn btn-dark" >Dólar Observado</button>
                        <button className="btn btn-dark" >Dólar Acuerdo</button>
                        <button className="btn btn-dark" >Unidad Fomento</button>
                        <button className="btn btn-dark" >Unidad Tributaria</button>
                        <button className="btn btn-dark" >Bitcoin</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar