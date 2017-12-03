import { CHANGE_DIRECTORY_DATA } from '../../actions/constant'

function create( state = {directory: {}}, action){
  switch (action.type){
    case CHANGE_DIRECTORY_DATA:
      //编辑数据
      let data = action.payload.oldDir;
      data[action.payload.id] = {
        id: action.payload.id,
        title: action.payload.title,
        list: action.payload.list
      };
      return {...state, ...{directory: data}}
    default:
      return state;
  }
}

export default create;