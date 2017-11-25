import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducer';
// import rootReducer from '../components/main/reducer';

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);