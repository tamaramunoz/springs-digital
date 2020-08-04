import axios from 'axios'

// inicial data
const inicialData = {
    array: [],
    value: ''
}

// actionTypes
const GET_INDICATOR_SUCCESS = 'GET_INDICATOR_SUCCESS'

// reducer
export default function indicatorReducer(state = inicialData, action){
    switch(action.type){
        case GET_INDICATOR_SUCCESS:
            return {...state, ...action.payload}
        default: 
            return state
    }
}

// action creators
export const getFinancialIndicatorAction = (type) => async(dispatch, getState) => {

    const kindIndicator = type
    // console.log(kindIndicator)

    try {
        const res = await axios.get(`https://mindicador.cl/api/${kindIndicator}`)
        console.log(res.data)
        dispatch({
            type: GET_INDICATOR_SUCCESS,
            payload: {
                array: res.data.serie,
                value: kindIndicator
            }
        })
    } catch (error) {
        console.log(error)
    }
}
