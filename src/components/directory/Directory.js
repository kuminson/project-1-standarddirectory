import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './directory.css';
import CheckedItem from "../checkedItem/CheckedItem";

class Directory extends Component{
  render(){
    //缓存目录id
    const dirId = this.props.match.params.dirId;
    //缓存目录数据
    const dirData = this.props.directory[dirId];
    return(
      <div className="directory">
        <h3 className="directory_title">{ dirData.title }</h3>
        <Link to="/" className="btn btn-primary directory_back">
          <span className="glyphicon glyphicon-arrow-left db_icon"> </span>
          &nbsp;返回
        </Link>
        <ul className="directory_list">
          { dirData.list.map((list, key) => (
            <CheckedItem list={list} key={key} />
          ))}
        </ul>
        <Link to="/" className="btn btn-primary directory_finish">完成</Link>
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
const MapDirectory = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {pure:false}
)(Directory);

export default MapDirectory;