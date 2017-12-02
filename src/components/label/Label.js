import React, { Component } from 'react';
import './label.css'

class Label extends Component{
  render(){
    return(
      <div className="mlabel">
        <h3 className="mlabel_title">标题</h3>
        <ol className="mlabel_content">
          <li className="mlabel_content_list"></li>
          <li className="mlabel_content_list">条目1</li>
          <li className="mlabel_content_list">条目1</li>
          <li className="mlabel_content_list">······</li>
        </ol>
      </div>
    )
  }
}

export default Label;