import React, { Component } from 'react';
import './home.css';
import { Route, Link } from 'react-router-dom';
import Label from "../label/Label";
import { connect } from 'react-redux';

class Home extends Component{
  render(){
    let listData = Object.values(this.props.directory);
    return(
      <div className="home">
        <h3 className="home_title">标准目录列表</h3>
        <Link to="/create" className="btn btn-primary home_add">
          <span className="glyphicon glyphicon-plus-sign hb_icon"> </span>
          &nbsp;新建
        </Link>
        <div className="container-fluid">
          <ul className="row home_content">
            <li className="col-xs-12 col-sm-6 col-md-6 col-lg-4 home_list">
              <Route exact path="/" component={Label}/>
            </li>
            {
              listData.map((list, key) => (
                <li className="col-xs-12 col-sm-6 col-md-6 col-lg-4 home_list" key={key}>
                  <Route exact path="/" component={Label} listid={list.id}/>
                </li>
              ))
            }
          </ul>
        </div>
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
const MapHome = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {pure:false}
)(Home);

export default MapHome;