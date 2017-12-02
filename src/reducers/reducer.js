import { combineReducers } from 'redux';
import main from '../components/main/reducer';
import header from '../components/header/reducer';
import footer from '../components/footer/reducer';
import create from '../components/create/reducer';

const rootReducer = combineReducers({
  main,
  header,
  footer,
  create
});

export default rootReducer;