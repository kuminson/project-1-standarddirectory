import { CACHE_HEAD_HEIGHT } from '../../actions/constant';

function header( state = { headHeight: 0}, action){
//  选择action
  switch (action.type){
    case CACHE_HEAD_HEIGHT:
  //    缓存head高度
      return Object.assign({}, state, {headHeight: action.payload});
    default:
      return state;
  }
}

export default header;