import React, { Component } from 'react';
import { CHANGE_DIRECTORY_DATA } from '../../actions/constant';
import { connect } from 'react-redux';
import './create.css'

class Create extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      list: [''],
      hint: 'create_hint_hide',
      hintContent: ''
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleAddNewList = this.handleAddNewList.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  //修改标题方法
  handleChangeTitle(e){
    let title = e.target.value.replace(/(^\s*)|(\s*$)/g,'');
    this.setState({
      title: title
    })
  }
  // 修改条目内容方法
  handleChangeText(key, e){
    //缓存value值
    let text = e.target.value.replace(/(^\s*)|(\s*$)/g,'');
    //重设list值
    this.setState((prevState) => {
      //缓存state里的list值
      let list = [...prevState.list];
      //修改list值
      list[key] = text;
      //返回修改后的list对象
      return {list: list}
    })
  }
  //增加条目方法
  handleAddNewList(){
    this.setState((state) => {
      //排除有非空值 情况
      for(let key in state.list){
        if(state.list[key] === ''){
          return {
            hint: 'create_hint',
            hintContent: '请写满内容再继续添加条目'
          };
        }
      }

      //插入一个空值
      let list = [...state.list];
      list.push('');
      return {list: list}
    })
  }
  // 返回方法
  handleGoBack(){
  //  询问确定返回
    if(window.confirm('确定要放弃编辑？')){
      //  返回home页
      this.props.history.push('/');
    }
  }
  // 保存表单方法
  handleSave(){
    this.setState((state) => {
      //  表单验证
      if(state.title === ''){
        return {
          hint: 'create_hint',
          hintContent: '标题不能为空'
        }
      }
      //排除为空的条目
      let list = state.list.filter((n) => n);
      //询问是否保存
      if(window.confirm('是否保存标准目录？')){
        //编辑数据
        let data = {};
        data.id = new Date().getTime();
        // data.data = {};
        // data.data.title = state.title;
        // data.data.list = state.list;
        data.title = state.title;
        data.list = list;
        //  提交数据
        this.props.changeDirectoryData(data);
      //  返回home页
        this.props.history.push('/');
      }
    })
  }
  render(){
    const mylist = this.state.list;
    return(
      <div className="create">
        <h3 className="create_title">新建标准目录</h3>
        <div className="input-group create_headline">
          <span className="input-group-addon" >标题</span>
          <input type="text" value={this.state.title} onChange={this.handleChangeTitle} className="form-control" />
        </div>
        <ul className="create_content">
          { mylist.map((list, key) => (
            <li key={key} className="create_content_item">
              <div className="input-group create_list">
                <span className="input-group-addon">{key + 1}</span>
                <input type="text" value={list} onChange={(e) => this.handleChangeText(key, e)} className="form-control" />
              </div>
            </li>
          ))
          }
        </ul>
        <p className={this.state.hint}>{this.state.hintContent}</p>
        <button type="button" className="btn btn-info create_new" onClick={this.handleAddNewList}>
          <span className="glyphicon glyphicon-plus-sign create_new_icon"> </span>
          新建条目
        </button>
        <div className="create_btn">
          <button onClick={this.handleGoBack} className="btn btn-primary create_btn_back">返回</button>
          <button onClick={this.handleSave} type="button" className="btn btn-success create_btn_save">保存</button>
        </div>
      </div>
    )
  }
}

//state 与 props映射
function mapStateToProps(state){
  return {
  }
}

//action creator
const changeDirectoryDataAction = (data) => ({
  type: CHANGE_DIRECTORY_DATA,
  payload : data
});

//dispatch 与 props映射
function mapDispatchToProps(dispatch){
  return {
    //改变目录数据
    changeDirectoryData: (data) => dispatch(changeDirectoryDataAction(data))
  }
}

//重构新的模块
const MapCreate = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {pure:false}
)(Create);

export default MapCreate;