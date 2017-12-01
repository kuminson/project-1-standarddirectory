import React, { Component } from 'react';
import { CACHE_HEAD_HEIGHT } from '../../actions/constant';
import './header.css';
import { connect } from 'react-redux';

class Header extends Component{
  constructor(props){
    super(props);
  // 初始化 header id
    this.state = {headerId: 'header'};
  //  绑定this
    this.cHeadHeight = this.cHeadHeight.bind(this);
  }
  cHeadHeight(){
    //获取模块高度
    const headht = document.getElementById(this.state.headerId).offsetHeight;
    //提交缓存模块高度action
    this.props.cacheHeadHeight(headht);
  }
  componentDidMount(){
    //构建完成后 计算head高度
    this.cHeadHeight();
    //window绑定resize事件
    window.addEventListener('resize', this.cHeadHeight);
  }
  componentWillUnmount(){
  //  注销window绑定的resize事件
    window.removeEventListener('resize', this.cHeadHeight);
  }
  render(){
    return (
      <div className="header" id="header">
        <h1 className="h_title">标准目录 <span className="ht_en">standardDirectory</span></h1>
      </div>
    )
  }
}


//action creator
const cacheHeadHeightAction = (headht) => ({
  type: CACHE_HEAD_HEIGHT,
  payload : headht
});

//dispatch 与 props映射
function mapDispatchToProps(dispatch){
  return {
    //重新计算主体div高度
    cacheHeadHeight: (headht) => dispatch(cacheHeadHeightAction(headht))
  }
}

const MapHeader = connect(
  null,
  mapDispatchToProps
)(Header);

export default MapHeader;