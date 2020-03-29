import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';

import './ui/reset.css';
import './ui/base.css';
import './ui/elements.css';
import './ui/styles.css';
import './ui/bootstrapGrid.css';

// import './ui/test.css';
import thunk from 'redux-thunk';

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import 'firebase/auth';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import fbConfig from './config/fbConfig';

require('dotenv').config();


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(
      fbConfig, 
      { 
        attachAuthIsReady: true,
        useFirestoreForProfile: true,
        userProfile: 'users'
      }
    )
  )
);


/* minified */
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

var myEfficientFn = debounce(() => {
  let vh = window.innerHeight;

  document.documentElement.style.setProperty('--vh', `${vh / 100}px`);

}, 750);

var loadedFn = () => {
  myEfficientFn();
  // window.scrollTo(0, 1);

  console.log('loaded')
}

// window.addEventListener('resize', loadedFn);
// window.addEventListener('load', myEfficientFn);


// https://stackoverflow.com/questions/32963400/android-keyboard-shrinking-the-viewport-and-elements-using-unit-vh-in-css



// ReactDOM.render(< App />, document.getElementById('root'));

// store.firebaseAuthIsReady
//   .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    )
  // })



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
