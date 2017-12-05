import React, { Component } from 'react';
import './checkedItem.css';

class CheckedItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      itemClass: 'checkedItem directory_list_item',
      btnClass : 'btn btn-primary directory_list_item_btn',
      iconClass: 'glyphicon glyphicon-unchecked directory_list_item_icon'
    }
    this.handleChangeBtn = this.handleChangeBtn.bind(this);
  }
  //改变按钮样式
  handleChangeBtn(){
    this.setState({
      itemClass: 'checkedItem directory_list_item_ses',
      btnClass: 'btn btn-success directory_list_item_btn',
      iconClass: 'glyphicon glyphicon-check directory_list_item_icon'
    });
  }
  render(){
    return (
      <li className={this.state.itemClass}>
        <button className={this.state.btnClass} onClick={this.handleChangeBtn}>
          <span className={this.state.iconClass}> </span>
        </button>
        <span className="directory_list_item_content">{this.props.list}</span>
      </li>
    )
  }
}

export default CheckedItem;