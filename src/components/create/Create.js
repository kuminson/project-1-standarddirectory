import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './create.css'

class Create extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      list: ['111', '222', '333']
    }
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.addNewList = this.addNewList.bind(this);
  }
  handleChangeTitle(e){
    this.setState({
      title: e.target.value
    })
  }
  handleChangeText(key, e){
    //缓存value值
    let text = e.target.value;
    //重设list值
    this.setState((prevState, props) => {
      //缓存state里的list值
      let list = [...prevState.list];
      //修改list值
      list[key] = text;
      //返回修改后的list对象
      return {list: list}
    })
  }
  addNewList(){
    this.setState((state, props) => {
      //排除最后一个非空
      if(state.list[state.list.length -1] == ''){
        return false;
      }
      //插入一个空值
      let list = [...state.list];
      list.push('');
      return {list: list}
    })
  }
  render(){
    const mylist = this.state.list;
    return(
      <div className="create">
        <h3 className="create_title">新建标准目录</h3>
        <div className="input-group create_headline">
          <span className="input-group-addon" >标题</span>
          <input type="text" onChange={this.handleChangeTitle} className="form-control" />
        </div>
        <ul className="create_content">
          { mylist.map((list) => (
            <li key={mylist.indexOf(list)} className="create_content_item">
              <div className="input-group create_list">
                <span className="input-group-addon">{mylist.indexOf(list)}</span>
                <input type="text" value={list} onChange={(e) => this.handleChangeText(mylist.indexOf(list), e)} className="form-control" />
              </div>
            </li>
          ))
          }
        </ul>
        <button type="button" className="btn btn-info create_new" onClick={this.addNewList}>
          <span className="glyphicon glyphicon-plus-sign create_new_icon"> </span>
          新建条目
        </button>
        <div className="create_btn">
          <Link to="/" className="btn btn-primary create_btn_back">返回</Link>
          <button type="button" className="btn btn-success create_btn_save">保存</button>
        </div>
      </div>
    )
  }
}

export default Create;