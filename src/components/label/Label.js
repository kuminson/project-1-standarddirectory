import React, { Component } from 'react';
import './label.css';
import { connect } from 'react-redux';

class Label extends Component{
  render(){
    //缓存条目数据
    const item = this.props.directory[this.props.listid];
    return(
      <div className="mlabel">
        <h3 className="mlabel_title">{item.title}</h3>
        <ol className="mlabel_content">
          <li className="mlabel_content_list">{item.list[0]}</li>
          <li className="mlabel_content_list">{item.list[1]}</li>
          <li className="mlabel_content_list">{item.list[2]}</li>
          <li className="mlabel_content_list">······</li>
        </ol>
      </div>
    )
  }
}

//state 与 props映射
function mapStateToProps(state){
  return {
    directory: state.create.directory
  }
}


//dispatch 与 props映射
function mapDispatchToProps(dispatch){
  return {
  }
}

//重构新的模块
const MapLabel = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {pure:false}
)(Label);

export default MapLabel;