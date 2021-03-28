
const initState = {
  loginCredentialValue: null,
  authError: null,
  unitsPreference: "imperial",
  genderPreference: "any",
  userReviews: null,
  uid: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {

    case 'LOGIN_SUCCESS':
      // console.log('login success', action.payload)

      return {
        ...state,
        loginCredentialValue: action.payload.loginObj,
        unitsPreference: action.payload.preferences.unitsPreference,
        genderPreference: action.payload.preferences.genderPreference,
        userReviews: action.payload.userReviews,
        uid: action.payload.loginObj.uid
      }

    case 'LOGIN_ERROR':
      console.log('login error', action.payload)

      return {
        ...state,
        loginCredentialValue: action.payload,
        authError: 'Login failed: ' + action.payload
      }


    case 'SIGNOUT_SUCCESS':
      console.log('logout success')
      return initState;

    case 'SIGNUP_SUCCESS':
      console.log('signup success')
      return {
        ...state,
        authError: null
      }

    case 'SIGNUP_ERROR':
      console.log('signup error')
      return {
        ...state,
        authError: action.err.message
      }

    case 'UNITS_PREFERENCE_RECEIVED':
      // console.log('login success', action.payload)
      return {
        ...state,
        unitsPreference: action.payload
      }

    case 'GENDER_PREFERENCE_RECEIVED':
      // console.log('login success', action.payload)
      return {
        ...state,
        genderPreference: action.payload
      }

    case 'NEW_FAVORITE':
      // console.log('center success: ', action.payload);
      return {
        ...state,
        favoriteValue: action.payload
      }
    case 'REMOVE_FAVORITE':
      // console.log('center success: ', action.payload);
      return {
        ...state,
        favoriteValue: action.payload
      }

    default:
      return state;


  }
}



export default authReducer;