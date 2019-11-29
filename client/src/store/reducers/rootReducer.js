// import authReducer from './authReducer';
// import reviewReducer from './reviewReducer';
import geolocationReducer from './geoReducer';
import mapListReducer from './mapListReducer';
import boundsReducer from './boundsReducer';
import { combineReducers } from 'redux';
// import { firestoreReducer } from 'redux-firestore';
// import { firebaseReducer } from 'react-redux-firebase';



const rootReducer = combineReducers({
  // auth: authReducer,
  // review: reviewReducer,
  geolocationState: geolocationReducer,
  mapListState: mapListReducer,
  boundsState: boundsReducer
  // firestore: firestoreReducer,
  // firebase: firebaseReducer
})


export default rootReducer;