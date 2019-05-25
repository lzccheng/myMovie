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
	handleClick() {
		if(copy(this.state.data.link)){
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
					<div className="col detail_top">首页 / 详情</div>
				</div>
				<div className="row">
					<h4 className="col text-center">电影</h4>
				</div>
				<div className="row text-center">
					<div className="col text-center">
						<img width="80%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558797636017&di=b413291da25f2cf75afcf5b4baf81b43&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170417%2F20170417094946_fbdb8481e5cff58cfa1e522ccf577566_5.jpeg" />
					</div>
				</div>
				<div className="row introduce">
					<div className="introduce">
						<span>电影名：</span>
						<span>啊啊撒旦发阿斯顿发生</span>
					</div>
					<div className="introduce">
						<span>电影名：</span>
						<span>啊啊撒旦发阿斯顿发生</span>
					</div>
					<div className="introduce">
						<span>电影名：</span>
						<span>啊啊撒旦发阿斯顿发生</span>
					</div>
				</div>
				<div className="row text-center">
					<div className="col text-center">
						<img width="80%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558797636017&di=b413291da25f2cf75afcf5b4baf81b43&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170417%2F20170417094946_fbdb8481e5cff58cfa1e522ccf577566_5.jpeg" />
					</div>
				</div>
				<div className="row link">
					<div className="col-2 link_text" style={{width: '120px'}}>
						链接：
					</div>
					<div className="col-auto line">
						{this.state.data.link}
					</div>
					<Button onClick={this.handleClick.bind(this)} className="align-self-end" type="primary">复制</Button>
				</div>
			</div>
		</div>)
	}
}