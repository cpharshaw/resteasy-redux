// import authReducer from './authReducer';
// import reviewReducer from './reviewReducer';
import geolocationReducer from './geoReducer';
import firestoreReducer from './foursquareReducer';
import mapListReducer from './mapListReducer';
import sectionReducer from './sectionReducer';
import boundsReducer from './boundsReducer';
import centerReducer from './centerReducer';
import circleReducer from './circleReducer';
import inputReducer from './inputReducer';
import mapReducer from './mapReducer';
import formReducer from './formReducer';
import { combineReducers } from 'redux';
// import { firestoreReducer } from 'redux-firestore';
// import { firebaseReducer } from 'react-redux-firebase';



const rootReducer = combineReducers({
  // auth: authReducer,
  // review: reviewReducer,
  geolocationState: geolocationReducer,
  foursquareState: firestoreReducer,
  mapListState: mapListReducer,
  sectionState: sectionReducer,
  boundsState: boundsReducer,
  centerState: centerReducer,
  circleState: circleReducer,
  mapState: mapReducer,
  formState: formReducer,
  inputState: inputReducer
  // firestore: firestoreReducer,
  // firebase: firebaseReducer
})


export default rootReducer;