import React, { Component } from 'react';
import { connect } from 'react-redux';
import './main.css';
import { CHANGE_WINDOW_HEIGHT } from '../../actions/constant';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import Create from "../create/Create";
import Directory from "../directory/Directory";

class Main extends Component{
  constructor(props){
    super(props);
    //绑定this
    this.cWindowHeight = this.cWindowHeight.bind(this);
  }
  //改变主体高度
  cWindowHeight(){
    this.props.changeWindowHeight( window.innerHeight );
  }
  componentDidMount(){
    //构建完成后 计算main高度
    this.cWindowHeight();
    //window绑定resize事件 发出计算window高度动作
    window.addEventListener('resize', this.cWindowHeight);
  }
  componentWillUnmount(){
    //卸载模块时 移除resize事件
    window.removeEventListener('resize', this.cWindowHeight);
  }
  render(){
    //计算main高度
    const mainHeight = this.props.windowHeight - this.props.headHeight - this.props.footHeight
    return (
      <div className="main">
        <div className="m_content" style={{minHeight: mainHeight + 'px'}}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/create" component={Create}/>
            <Route path="/directory/:dirId" component={Directory}/>
          </Switch>
        </div>
      </div>
    )
  }
}

//state 与 props映射
function mapStateToProps(state){
  return {
    //主体div高度
    windowHeight: state.main.windowHeight,
    headHeight: state.header.headHeight,
    footHeight: state.footer.footHeight,
    directory: state.create.directory
  }
}

//action creator
const changeWindowHeightAction = (windowHeight) => ({
  type: CHANGE_WINDOW_HEIGHT,
  payload: windowHeight
});

//dispatch 与 props映射
function mapDispatchToProps(dispatch){
  return {
    //重新计算主体div高度
    changeWindowHeight: (windowHeight) => dispatch(changeWindowHeightAction(windowHeight))
  }
}

const MapMain = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {pure:false}
)(Main);



export default MapMain;