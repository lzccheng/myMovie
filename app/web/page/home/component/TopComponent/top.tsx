import React, { Component } from 'react';
import './top.css';

export default class Top extends Component {
	render() {
		return (<div className="top">
			{this.props.text}
		</div>)
	}
}