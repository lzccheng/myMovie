import React, { Component } from 'react';
import { Select } from 'antd';
import './sort.less';
const Option = Select.Option

export default class SortItem extends Component {
	constructor() {
		this.state = {
			option: [],
			typeArr: [
				'喜剧',
				'惊悚'
			]
		}
	}
	componentDidMount() {
		let option = [];
		const len = 70;
		let nowYear = new Date().getFullYear();
		for (let i = 0; i < len; i++) {
			option.push(`${nowYear}`);
			nowYear --;
		}
		this.setState({
			option
		})
	}
	handleChange(val) {
		const data = { type: this.props.type, value: val }
		this.props.onchange && this.props.onchange(data);
	}
	render() {
		return (<div className="sort_item">
			<span>{this.props.text}</span>
			{this.props.type == 1 && <Select onChange={this.handleChange.bind(this)} defaultValue="全部" className="">
			  {this.state.option.map((item, i) => <Option key={i} value={item}>{item}</Option>)}
			</Select>}
			{this.props.type == 2 && <Select defaultValue="全部" onChange={this.handleChange.bind(this)} className="">
			  {this.state.typeArr.map((item, i) => <Option key={i} value={item}>{item}</Option>)}
			</Select>}

		</div>)
	}
}