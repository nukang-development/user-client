import { createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import tukangReducer from './reducers/tukangReducer'

const rootReducer = combineReducers({ tukangReducer })

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store