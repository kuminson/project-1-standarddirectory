import { CACHE_FOOT_HEIGHT } from '../../actions/constant';

function footer( state = { footHeight: 0}, action){
//  选择action
  switch (action.type){
    case CACHE_FOOT_HEIGHT:
      //    缓存head高度
      return Object.assign({}, state, {footHeight: action.payload});
    default:
      return state;
  }
}

export default footer;