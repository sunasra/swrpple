import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from  '../reducers'
 
const configStore = (defaultStore = {}) => {
    debugger;
    const store = createStore(
        rootReducer,
        defaultStore,
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )

    return store
}

export default configStore