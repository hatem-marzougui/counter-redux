import {createStore,applyMiddleware} from 'redux';
import reducer from './components/Reducer';




const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
   }


export const store=createStore(
    reducer, applyMiddleware(logger)
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    
    );

