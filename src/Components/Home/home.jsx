import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getProducts} from '../../Actions/productActions'
import Product from '../Product/product'
class Home extends Component {

	componentDidMount() {
		this.props.getProducts()
	}

	renderProducts() {
		const {products} = this.props
		let htmlOut = products.map(product => {
			return(<Product key = {product.id} product = {product} />)
		})

		return htmlOut || null;
	}

	render() {
		return(
				<div className="container">
					<div className='row'>
						{this.renderProducts()}
					</div>
				</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {products: (state.productsDetails.products && state.productsDetails.products.groups) || []}

}

export default connect(mapStateToProps, {getProducts})(Home)