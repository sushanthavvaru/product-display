import React, {Component} from 'react'

import Modal from './modal'
import './product.css'


class Product extends Component {

	state = {show: false}

	showModal = () => {
		console.log("here")
		this.setState({show: true})
	}

	hideModal = () => {
		this.setState({show: false})
	}

	displayTags(product) {
		let tags = product.flags.map(flag=>flag.id)
		return tags.join(" ")
	}

	render() {
		let {product} = this.props
		return(
			<div className="col-md-4 col-sm-12 product" >
				<div className="product-content">
					<h5 className="product-name">{product.name}</h5>	
					<div>

						<Modal show={this.state.show} handleClose={this.hideModal} product={product} />

						<img className="img" 
							src={product.hero.href} 
							alt={product.name}
							onClick = {this.showModal}
							style={{width:product.hero.href.width, height:product.hero.href.height}}
						/>
					
					</div>

					<p className="tags">Product tags: {this.displayTags(product)}</p>

					<div>
						<p><span className="old-price">${product.priceRange.regular.low}&nbsp;&nbsp;${product.priceRange.regular.high}</span>
							&nbsp;<span className="new-price">Special Offer ${product.priceRange.selling.low}&nbsp;-&nbsp;${product.priceRange.selling.high}</span>
						</p>
					</div>

					<a className="more-button" title = "Link for more details about above product" href={product.links.www}>Click Here To Learn More </a>
				</div>
				
			</div>
			)
	}
}

export default Product