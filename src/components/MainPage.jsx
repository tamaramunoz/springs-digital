import React from 'react'
import { useSelector } from 'react-redux'


const MainPage = () => {

    const readingIndicators = useSelector(store => store.financialIndicators.array)
    // console.log(readingIndicators)

    return (
        <div className="container mt-3">
                {
                    readingIndicators.map((item, index) => (
                        <div className="card border-success mb-3" key={index}>
                            <div className="card-body text-success">
                                <h5 className="card-title">Valor: {item.valor}</h5>
                                <p className="card-text">Fecha: {item.fecha.slice(0, 10)} </p>
                            </div>
                        </div>
                    ))
                }
        </div>
    )
}

export default MainPage