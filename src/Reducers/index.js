import {combineReducers} from 'redux'


export const PRODUCT_DETAILS = 'PRODUCT_DETAILS'

const productsReducer = (state = {}, action) => {

	switch(action.type) {

		case PRODUCT_DETAILS: 
			return {...state, products: action.payload}
		default:
			return state
	}

}


const rootReducer = combineReducers({
	productsDetails: productsReducer
})

export default rootReducer	