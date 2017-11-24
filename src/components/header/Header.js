import React, { Component } from 'react';
import './header.css';

class Header extends Component{
  render(){
    return (
      <div className="header">
        <h1 className="h_title">标准目录 <span className="ht_en">standardDirectory</span></h1>
      </div>
    )
  }
}

export default Header;