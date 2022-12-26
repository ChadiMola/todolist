//src/JS/store.js
import { createStore } from 'redux'
import rootReducer from '../JS/Reducers/rootReducer'

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;