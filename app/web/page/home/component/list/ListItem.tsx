import React, { Component } from 'react';
import './list.css';

export default class Item extends Component {
	render() {
		return (<div className="col-xs-6 col-sm-4 col-md-3 ">
			<a href={`/detail?id=${this.props.id}`} className="list_item">
				<div className="item_img">
					<img src={this.props.img} width="100%"/>
				</div>
			    <p className="text-center">{this.props.title}</p>
			</a>
		</div>)
	}
}