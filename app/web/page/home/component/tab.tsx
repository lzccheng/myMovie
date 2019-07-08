import React, { Component } from 'react';
import { Tabs, Button } from 'antd';
import Header from '../../../component/header/header';
import Top from './TopComponent/top';
import List from './list/List';
import Sort from './Sort/Sort';
import { TabProps } from '../../../framework/type';
import './tab.css';

const TabPane = Tabs.TabPane;
const tabItemClick = (key) => {
  console.log('tab click', key);
};
// https://github.com/gaearon/react-hot-loader/issues/525
// must export, not export default
export class Tab extends Component<TabProps, any> {
  constructor () {
    // this.state = {
    //   list: [
    //     {
    //       img: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558792378518&di=4a57d453d4fad8011cba48644cbbf03e&imgtype=0&src=http%3A%2F%2Fpic.chinadaily.com.cn%2Fimg%2Fattachement%2Fjpg%2Fsite1%2F20160205%2Fa41f726b0511181e21170b.jpg`,
    //       title: '美女'
    //     },
    //     {
    //       img: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558792378518&di=4a57d453d4fad8011cba48644cbbf03e&imgtype=0&src=http%3A%2F%2Fpic.chinadaily.com.cn%2Fimg%2Fattachement%2Fjpg%2Fsite1%2F20160205%2Fa41f726b0511181e21170b.jpg`,
    //       title: '美女'
    //     },
    //     {
    //       img: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558792378518&di=4a57d453d4fad8011cba48644cbbf03e&imgtype=0&src=http%3A%2F%2Fpic.chinadaily.com.cn%2Fimg%2Fattachement%2Fjpg%2Fsite1%2F20160205%2Fa41f726b0511181e21170b.jpg`,
    //       title: '美女'
    //     },
    //     {
    //       img: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558792378518&di=4a57d453d4fad8011cba48644cbbf03e&imgtype=0&src=http%3A%2F%2Fpic.chinadaily.com.cn%2Fimg%2Fattachement%2Fjpg%2Fsite1%2F20160205%2Fa41f726b0511181e21170b.jpg`,
    //       title: '美女'
    //     },
    //     {
    //       img: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558792378518&di=4a57d453d4fad8011cba48644cbbf03e&imgtype=0&src=http%3A%2F%2Fpic.chinadaily.com.cn%2Fimg%2Fattachement%2Fjpg%2Fsite1%2F20160205%2Fa41f726b0511181e21170b.jpg`,
    //       title: '美女'
    //     },
    //     {
    //       img: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558792378518&di=4a57d453d4fad8011cba48644cbbf03e&imgtype=0&src=http%3A%2F%2Fpic.chinadaily.com.cn%2Fimg%2Fattachement%2Fjpg%2Fsite1%2F20160205%2Fa41f726b0511181e21170b.jpg`,
    //       title: '美女'
    //     },
    //   ]
    // }
  }
  componentDidMount() {
  }
  render() {
    return <div>
      <Header></Header>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-9 col-lg-9">
            <Top text={'视频：'}/>
            <List list={this.props.data}/>
          </div>
          <div className="col-md-3 col-lg-3 hidden-xs hidden-sm">
            <Top text={'分类：'}/>
            <Sort />
          </div>
        </div>
      </div>
    </div>
  }
}