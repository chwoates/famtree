import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {compose, configureStore, applyMiddleware} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import produce from 'immer'

let appStates = {currPage:"Home", backup:false, loginSuccessful:false}

function reducer(state=appStates, action){

  switch(action.type){
    case 'UPDATE_LOGIN':
      return produce(state,draft =>{
        draft.loginSuccessful = true
      })

    case 'CHANGE_BACKUP':
      return produce(state, draft =>{
        draft.backup = action.value
      })

    case 'CHANGE_FILE_NAME':
      return produce(state, draft =>{
        draft.currPage = action.value
      })

    default:
      return state
  } 

}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers()
const root = ReactDOM.createRoot(document.getElementById('root'));
let store = configureStore({reducer}, enhancer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
