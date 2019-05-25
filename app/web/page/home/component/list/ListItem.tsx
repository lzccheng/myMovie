import React, { Component } from 'react';
import './list.css';

export default class Item extends Component {
	render() {
		return (<div className="col-xs-6 col-sm-4 col-md-3 ">
			<div className="list_item">
				<img src={this.props.img} width="100%"/>
			    <p className="text-center">{this.props.title}</p>
			</div>
		</div>)
	}
}