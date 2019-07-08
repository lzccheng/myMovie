import React, { Component } from 'react';
import './list.css';

export default class Item extends Component {
	render() {
		return (<div className="col-xs-6 col-sm-4 col-md-3 ">
			<div className="list_item">
				<a href={`/detail?id=${this.props.id}`}>
					<div className="item_img" style={{backgroundImage: `url(${this.props.img})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
					</div>
				    <p className="text-center title_">{this.props.title}</p>
				</a>
			</div>
			
		</div>)
	}
}