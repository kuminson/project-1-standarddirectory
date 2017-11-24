import { CHANGE_MAIN_HEIGHT } from '../../actions/constant';

function main(state = { mainHeight: 0}, action){
  //选择Action
  switch (action.type){
    case CHANGE_MAIN_HEIGHT:
      //缓存window高度
      const windowHeight = document.window.innerHeight;
      //初始化新main高度
      let mh = 0;
      //如果其他组件为空
      if(state.otherHeight === undefined || Object.getOwnPropertyNames(state.otherHeight).length === 0){
        //返回window高度
        return windowHeight;
      }
      //缓存其他组件高度
      const otherHeight = state.otherHeight;
      //计算main高度
      for( let h in otherHeight){
        mh = windowHeight - otherHeight[h];
      }
      //返回main高度
      return state.mainHeight = mh;
    default:
      return state;
  }

}

export default main;