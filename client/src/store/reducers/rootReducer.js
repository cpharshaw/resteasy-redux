// import authReducer from './authReducer';
// import reviewReducer from './reviewReducer';
import geoReducer from './geoReducer';
import mapListReducer from './mapListReducer';
import { combineReducers } from 'redux';
// import { firestoreReducer } from 'redux-firestore';
// import { firebaseReducer } from 'react-redux-firebase';



const rootReducer = combineReducers({
  // auth: authReducer,
  // review: reviewReducer,
  geoLocationState: geoReducer,
  mapListState: mapListReducer,
  // firestore: firestoreReducer,
  // firebase: firebaseReducer
})



export default rootReducer;