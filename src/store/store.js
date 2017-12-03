import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducer';
// import rootReducer from '../components/main/reducer';

//默认state
let ostate = {
  create: {
    directory:{
      123129: {
        id:123129,
        title: 'biaoti1111',
        list: ['1111', '2221', '3333']
      },
      9292319: {
        id:9292319,
        title: 'biaoti22222',
        list: ['1111', '2222', '3333']
      },
      152341123: {
        id:152341123,
        title: 'biaoti22222',
        list: ['1111', '2223', '3333']
      },
      12341234: {
        id:12341234,
        title: 'biaoti22222',
        list: ['1111', '2224', '3333']
      },
      929215123319: {
        id:929215123319,
        title: 'biaoti22222',
        list: ['1111', '2225', '3333']
      },
      12354123: {
        id:12354123,
        title: 'biaoti22222',
        list: ['1111', '2226', '3333']
      },
    }
  }
};

export default createStore(
  rootReducer,
  ostate,
  applyMiddleware(thunk)
);