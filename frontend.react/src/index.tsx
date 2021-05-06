import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Spectral:wght@700&display=swap"
    />
    <App />
  </Provider>,
  document.getElementById('root')
)
