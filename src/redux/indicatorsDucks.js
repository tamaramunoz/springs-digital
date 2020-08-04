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

   
}