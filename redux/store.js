import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import sagaData from '../navigation/saga'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleWare]
})
sagaMiddleWare.run(sagaData)
export default store