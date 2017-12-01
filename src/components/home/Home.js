import React, { Component } from 'react';
import './home.css';
import { Route, Link } from 'react-router-dom';
import Label from "../label/Label";

class Home extends Component{
  render(){
    return(
      <div className="home">
        <h3 className="home_title">标准目录列表</h3>
        <Link to="/create" className="btn btn-primary home_add">
          <span className="glyphicon glyphicon-plus-sign hb_icon"> </span>
          &nbsp;新建
        </Link>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 home_list">
              <Route exact path="/" component={Label}/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 home_list">
              <Route exact path="/" component={Label}/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 home_list">
              <Route exact path="/" component={Label}/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 home_list">
              <Route exact path="/" component={Label}/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 home_list">
              <Route exact path="/" component={Label}/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 home_list">
              <Route exact path="/" component={Label}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;