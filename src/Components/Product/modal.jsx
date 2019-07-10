import React, {Component} from 'react'

import './modal.css'

class Modal extends Component {

	state = {selectedImage: this.props.product.hero.href}

	showDisplayImages(product) {
		let displayImagesList = [product.hero, ...product.images]

		let imageList = displayImagesList.map(img => {
			return <img className="display-img" src={img.href} alt={img.alt} onClick={ () =>{ this.setState({selectedImage: img.href}) }}/>
		})

		return imageList
	}

	render() {
		const { handleClose, show, product } = this.props
		const showHideClassName = show ? "modal display-block" : "modal display-none";

		console.log(product)

		 return (
		 	<div className={showHideClassName}>
		      	<section className="modal-main">
		      		<h5>{product.name}</h5>
		        	<div className="row">
		        		<div className="col-xs-12 col-sm-3 display-img-section">
		        			{this.showDisplayImages(product)}
		        		</div>

		        		<div className="col-xs-12 col-sm-9">
		        			<img className = "main-img" src={this.state.selectedImage} alt={product.name}/>
		        		</div>

		        	</div>
		        	<button className = "btn btn-primary close-btn" onClick={handleClose}>close</button>
		      	</section>
	    	</div>
  		);
	}
}

export default Modal