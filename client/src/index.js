
import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './ui/reset.css';
import './ui/base.css';
import './ui/elements.css';
import './ui/styles.css';



import { getFirestore } from 'redux-firestore';
// import { reduxFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
require('dotenv').config();

// import { reactReduxFirebase } from 'react-redux-firebase';

// import fbConfig from './config/fbConfig';
// import './components/Splash/brand.js';

const store = createStore(
  rootReducer,
  compose(
    // applyMiddleware(thunk)
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase }))

    // reduxFirestore(fbConfig),
    // reactReduxFirebase(
    //   fbConfig,
    //   {
    //     attachAuthIsReady: true,
    //     useFirestoreForProfile: true,
    //     userProfile: 'users'
    //   }
    // )
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

  // this.setState({
  //   windowHeight: [...this.state.windowHeight, vh]
  // })

  document.documentElement.style.setProperty('--vh', `${vh / 100}px`);
  // console.log("window height: ", this.state.windowHeight)
  // console.log("MAX - window height: ", this.state.max_windowHeight())
  // console.log("MIN - window height: ", this.state.min_windowHeight())

  // console.log("address bar height: ", this.state.max_windowHeight() - this.state.min_windowHeight());
}, 750);

var loadedFn = () => {
  myEfficientFn();
  // window.scrollTo(0, 1);

  console.log('loaded')
}

window.addEventListener('resize', loadedFn);
window.addEventListener('load', myEfficientFn);


// ReactDOM.render(< App />, document.getElementById('root'));

// store.firebaseAuthIsReady
//   .then(() => {
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// })


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
