import React, { Component } from 'react';
import { connect } from 'react-redux';
import './main.css';
import { CHANGE_MAIN_HEIGHT } from '../../actions/constant';

class Main extends Component{
  componentDidMount(){
    //构建完成后 计算main高度
    this.props.changeMainHeight();
    //window绑定resize事件
    window.addEventListener('resize',
    //  发出计算main高度动作
      this.props.changeMainHeight()
    );
  }
  componentWillUnmount(){
    //卸载模块时 移除resize事件
    window.removeEventListener('resize',
      this.props.changeMainHeight()
    );
  }
  render(){
    return (
      <div className="main">
        <div className="m_content" style={{minHeight: this.props.mainHeight}}>
          this is main
        </div>
      </div>
    )
  }
}

//state 与 props映射
function mapStateToProps(state){
  return {
    //主体div高度
    mainHeight: state.mainHeight
  }
}

//action creator
const changeMainHeightAction = { type: CHANGE_MAIN_HEIGHT};

//dispatch 与 props映射
function mapDispatchToProps(dispatch){
  return {
    //重新计算主体div高度
    changeMainHeight: () => dispatch(changeMainHeightAction)
  }
}

const MapMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);



export default MapMain;