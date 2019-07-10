import axios from 'axios'
import {PRODUCT_DETAILS} from '../Reducers'


export const getProducts = () => (dispatch) => {

	axios.get('http://localhost:4000/getProduct').then(response => {
			dispatch({type: PRODUCT_DETAILS, payload: response.data})
		})
}