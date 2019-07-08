import React, { Component } from 'react';
import SortItem from './SortItem'

export default class Sort extends Component {
	constructor() {
		this.state = {
			sort: [
				{text: '年份：', type: 1},
				{text: '类型：', type: 2},
			],
			sortChange: {}
		}
	}
	handleChange(data) {
		console.log(data, this.state, '===')
		let str = ``;
		this.state.sortChange[data.type] = data.value;
		const sortChange = this.state.sortChange;
		for (let i in sortChange) {
			if (str && !/&$/.test(str)) str += '&';
			if (i == 1) str += `year=${sortChange[i]}`;
			if (i == 2) str += `type=${sortChange[i]}`;
		}
		console.log(str)
		window.location.href = `/index?${str}`;
	}
	render() {
		return (<div>
			{this.state.sort.map((item, i) => <SortItem onchange={this.handleChange.bind(this)} text={item.text} type={item.type} key={i}/>)}
		</div>)
	}
}