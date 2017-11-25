import React, { Component } from 'react';
import { CACHE_HEAD_HEIGHT } from '../../actions/constant';
import './header.css';
import { connect } from 'react-redux';

class Header extends Component{
  componentDidMount(){
    //构建完成后 计算head高度
    const headht = document.getElementById('header').offsetHeight;
    this.props.cacheHeadHeight(headht);
    //window绑定resize事件
    window.addEventListener('resize', () => {
      //  发出计算main高度动作
      const headht = document.getElementById('header').offsetHeight;
      this.props.cacheHeadHeight(headht);
    });
  }
  render(){
    return (
      <div className="header" id="header">
        <h1 className="h_title">标准目录 <span className="ht_en">standardDirectory</span></h1>
      </div>
    )
  }
}


//state 与 props映射
function mapStateToProps(state){
  return {
  }
}

//action creator
const cacheHeadHeightAction = (headht) => ({ type: CACHE_HEAD_HEIGHT,
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
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default MapHeader;