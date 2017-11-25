import { combineReducers } from 'redux';
import main from '../components/main/reducer';
import header from '../components/header/reducer';

const rootReducer = combineReducers({
  main: main,
  header: header
});

export default rootReducer;