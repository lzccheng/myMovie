import React, { Component } from 'react';

import Item from './ListItem';
import './list.css';

export default class List extends Component {
	render() {
		return (<div className="marTop">
			{this.props.list.map((item, i) => {
				return <Item key={i} img={item.img} title={item.title} />;
			})}
		</div>)
	}
}