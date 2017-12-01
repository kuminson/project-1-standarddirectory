import React, { Component } from 'react';
import './footer.css';
import { connect } from 'react-redux';
import { CACHE_FOOT_HEIGHT } from '../../actions/constant';

class Footer extends Component{
  constructor(props){
    super(props);
    // 初始化 footer id
    this.state = {footerId: 'footer'};
    //  绑定this
    this.cFootHeight = this.cFootHeight.bind(this);
  }
  cFootHeight(){
    //获取模块高度
    const footht = document.getElementById(this.state.footerId).offsetHeight;
    //提交缓存模块高度action
    this.props.cacheFootHeight(footht);
  }
  componentDidMount(){
    //构建完成后 计算foot高度
    this.cFootHeight();
    //window绑定resize事件
    window.addEventListener('resize', this.cFootHeight);
  }
  componentWillUnmount(){
    //  注销window绑定的resize事件
    window.removeEventListener('resize', this.cFootHeight);
  }
  render(){
    return (
      <div className="footer" id={this.state.footerId}>
        <p>kuminson&copy;2017&nbsp;个人实验性单页应用</p>
        <p>个人技术博客&nbsp;=&gt;&nbsp;<a className="f_link" href="https://kuminson.github.io/">kuminson</a></p>
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
const cacheFootHeightAction = (footht) => ({
  type: CACHE_FOOT_HEIGHT,
  payload : footht
});

//dispatch 与 props映射
function mapDispatchToProps(dispatch){
  return {
    //重新计算主体div高度
    cacheFootHeight: (footht) => dispatch(cacheFootHeightAction(footht))
  }
}

//重构新的模块
const MapFooter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

export default MapFooter;