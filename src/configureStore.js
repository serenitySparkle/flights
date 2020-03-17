import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'
import appReducer from './reducers'
import appSaga from './sagas'
const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLogger()


export function configureStore(initialState) {
    const middleware = [sagaMiddleware, loggerMiddleware];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(appReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
    sagaMiddleware.run(appSaga);
    return store;
}