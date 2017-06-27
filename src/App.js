
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configStore from './store/configStore'
import Main from './components/Main'

const store = configStore({})
render (
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
)
