import { CHANGE_WINDOW_HEIGHT } from '../../actions/constant';

function main(state = { windowHeight: 0}, action){
  //选择Action
  switch (action.type){
    case CHANGE_WINDOW_HEIGHT:
      return Object.assign({}, state, {windowHeight: action.payload});
    default:
      return state;
  }

}

export default main;