import authReducer from './authReducer';
// import reviewReducer from './reviewReducer';
import geolocationReducer from './geoReducer';
import mapListReducer from './mapListReducer';
import sectionReducer from './sectionReducer';
import boundsReducer from './boundsReducer';
import centerReducer from './centerReducer';
import circleReducer from './circleReducer';
import inputReducer from './inputReducer';
import foursquareReducer from './foursquareReducer';
import mapReducer from './mapReducer';
import googleAPIReducer from './googleAPIReducer';
import modalReducer from './modalReducer';
import formReducer from './formReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';



const rootReducer = combineReducers({
  auth: authReducer,
  geolocationState: geolocationReducer,
  foursquareState: foursquareReducer,
  mapListState: mapListReducer,
  sectionState: sectionReducer,
  boundsState: boundsReducer,
  centerState: centerReducer,
  circleState: circleReducer,
  modalState: modalReducer,
  mapState: mapReducer,
  googleAPIState: googleAPIReducer,
  formState: formReducer,
  inputState: inputReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})


export default rootReducer;