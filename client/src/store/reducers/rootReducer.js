import authReducer from './authReducer';
// import reviewReducer from './reviewReducer';
import geolocationReducer from './geoReducer';
import mapListReducer from './mapListReducer';
import sectionReducer from './sectionReducer';
import inputReducer from './inputReducer';
import myStuffReducer from './myStuffReducer';
import foursquareReducer from './foursquareReducer';
import mapReducer from './mapReducer';
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
  modalState: modalReducer,
  myStuffState: myStuffReducer,
  mapState: mapReducer,
  formState: formReducer,
  inputState: inputReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})


export default rootReducer;