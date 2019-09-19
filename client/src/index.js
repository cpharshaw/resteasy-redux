import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import { getFirestore } from 'redux-firestore';
// import { reduxFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
// import { reactReduxFirebase } from 'react-redux-firebase';

// import fbConfig from './config/fbConfig';
// import './components/Splash/brand.js';

const store = createStore(
  rootReducer,
  compose(
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
