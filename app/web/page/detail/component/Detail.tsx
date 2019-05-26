import React, { Component } from 'react';
import { Button, message } from 'antd';
import copy from 'copy-to-clipboard';

import Header from '../../../component/header/header';
import './detail.less';

export default class Detail extends Component {
	constructor() {
		this.state = {
			data: {
				link: 'https://swas.console.aliyun.com/?spm=5176.12818093.my.dswas.488716d0UK2Srl#/server/258244c4b2bc4131b39a80094cfd1c3d/cn-shenzhen/dashboard'
			}
		}
	}
	handleClick(text) {
		console.log(9999, text)
		if(copy(text)){
		    message.success('复制成功！');
		}else{
		    message.error('复制失败！');
		}
	}
	render() {
		return (<div>
			<Header></Header>
			<div className="container">
				<div className="row">
					<div className="col detail_top"><a href="/">首页</a> / 详情</div>
				</div>
				<div className="row">
					<h4 className="col text-center">{this.props.data.title}</h4>
				</div>
				<div className="row text-center">
					<div className="col text-center">
						<img width="80%" src={this.props.data.poster} />
					</div>
				</div>
				<div className="row introduce">
					{this.props.data.introduction.map((item, i) => {
						return (<div key={i} className="introduce">
						  {item}
					  </div>)
					})}
				</div>
				<div className="row text-center">
					<div className="col text-center">
						{this.props.data.imgs.map((item, i) => {
							return <img width="80%" key={i} src={item}/>
						})}
					</div>
				</div>
				<div className="row link">
					<div className="col-2 link_text" style={{width: '120px'}}>
						链接：
					</div>
					<div className="col-auto line">
						{this.props.data.ftpUrl}
					</div>
					<Button onClick={this.handleClick.bind(this, this.props.data.ftpUrl)} className="align-self-end" type="primary">复制</Button>
				</div>
			</div>
		</div>)
	}
}