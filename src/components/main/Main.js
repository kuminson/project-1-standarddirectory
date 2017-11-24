import React, { Component } from 'react';
import { connect } from 'react-redux';
import './main.css';
import { CHANGE_MAIN_HEIGHT } from '../../actions/constant';

class Main extends Component{
  componentDidMount(){
    window.document.addEventListener('onChange', () => {
    //  发出计算main高度动作
      this.props.changeMainHeight();
    });
  }
  render(){
    return (
      <div className="main" style={{ minHeight: this.props.mainHeight }}>
        <div className="m_content">
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

//dispatch 与 props映射
function mapDispatchToProps(dispatch){
  return {
    //重新计算主体div高度
    changeMainHeight: () => dispatch(changeMainHeightAction)
  }
}

//action creator
const changeMainHeightAction = { type: CHANGE_MAIN_HEIGHT};

const MapMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);



export default MapMain;