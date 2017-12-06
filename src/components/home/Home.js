import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Label from "../label/Label";
import { connect } from 'react-redux';

class Home extends Component{
  constructor(props){
    super(props);
    this.handleGoDir = this.handleGoDir.bind(this);
  }
  handleGoDir(id, e){
    this.props.history.push('/directory/'+ id);
  }
  render(){
    let listData = Object.values(this.props.directory);
    return(
      <div className="home">
        <h3 className="home_title">标准目录列表</h3>
        <div className="container-fluid">
          <ul className="row home_content">
            {
              listData.map((list, key) => (
                <li className="col-xs-12 col-sm-6 col-md-6 col-lg-4 home_list" key={key} onClick={(e) => this.handleGoDir(list.id, e)}>
                  {/*<Route exact path="/" component={Label} listid={list.id}/>*/}
                  <Label listid={list.id} history={this.props.history}/>
                </li>
              ))
            }
            <li className="col-xs-12 col-sm-12 col-md-12 col-lg-12 home_list" key='create' >
              <Link to="/create" className="btn btn-primary home_add">
                <span className="glyphicon glyphicon-plus-sign hb_icon"> </span>
                &nbsp;新建
              </Link>
            </li>
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