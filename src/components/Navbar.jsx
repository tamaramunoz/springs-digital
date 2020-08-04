import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getFinancialIndicatorAction } from '../redux/indicatorsDucks'

// styles
import '../styles/Navbar.css'


const Navbar = () => {

    const dispatch = useDispatch()

    return (
        <div className="mt-3">
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <Link className="navbar-brand" to="/"><i className="fas fa-home"></i></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className="btn btn-success" to="/indicators" onClick={() => dispatch(getFinancialIndicatorAction('libra_cobre'))}>Libra</Link>
                        <Link className="btn btn-success" to="/indicators" onClick={() => dispatch(getFinancialIndicatorAction('tasa_desempleo'))}>Desempleo</Link>
                        <Link className="btn btn-success" to="/indicators" onClick={() => dispatch(getFinancialIndicatorAction('imacec'))}>Imacec</Link>
                        <Link className="btn btn-success" to="/indicators" onClick={() => dispatch(getFinancialIndicatorAction('euro'))}>Euro</Link>
                        <Link className="btn btn-success" to="/indicators" onClick={() => dispatch(getFinancialIndicatorAction('dolar'))}>Dólar Observado</Link>
                        <Link className="btn btn-success" to="/indicators" onClick={() => dispatch(getFinancialIndicatorAction('dolar_intercambio'))}>Dólar Acuerdo</Link>
                        <Link className="btn btn-success" to="/indicators" onClick={() => dispatch(getFinancialIndicatorAction('uf'))}>Unidad Fomento</Link>
                        <Link className="btn btn-success" to="/indicators" onClick={() => dispatch(getFinancialIndicatorAction('utm'))}>Unidad Tributaria</Link>
                        <Link className="btn btn-success" to="/indicators" onClick={() => dispatch(getFinancialIndicatorAction('bitcoin'))}>Bitcoin</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar