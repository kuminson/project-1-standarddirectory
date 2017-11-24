import React, { Component } from 'react';
import './footer.css'

class Footer extends Component{
  render(){
    return (
      <div className="footer">
        <p>kuminson&copy;2017&nbsp;个人实验性单页应用</p>
        <p>个人技术博客&nbsp;=&gt;&nbsp;<a className="f_link" href="https://kuminson.github.io/">kuminson</a></p>
      </div>
    )
  }
}

export default Footer;