import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const MainPage = () => {

    const dispatch = useDispatch()

    const readingIndicators = useSelector(store => store.financialIndicators.array)
    console.log(readingIndicators)

    return (
        <div className="container">            
            <ul>
                {
                    readingIndicators.map((item, index) => (
                        <li key={index}> {item.fecha.slice(0,10)} | {item.valor} </li> 
                    ))
                }
            </ul>
        </div>
    )
}

export default MainPage