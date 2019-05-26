import React, { Component } from 'react';

import Item from './ListItem';
import './list.css';

export default class List extends Component {
	componentDidMount() {
		console.log(this.props.data)
	}
	render() {
		return (<div className="marTop">
			{this.props.list.map((item, i) => {
				console.log(item)
				return <Item key={i} id={item._id} img={item.poster} title={item.title} />;
			})}
		</div>)
	}
}