import { combineReducers } from 'redux';
import main from '../components/main/reducer';
import header from '../components/header/reducer';
import footer from '../components/footer/reducer';

const rootReducer = combineReducers({
  main,
  header,
  footer
});

export default rootReducer;