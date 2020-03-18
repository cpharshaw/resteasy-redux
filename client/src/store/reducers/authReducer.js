
const initState = {
  loginCredentialValue: null,
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {


    case 'LOGIN_ERROR':
      console.log('login error')
      return {
        ...state,
        authError: 'Login failed'
      }

    case 'LOGIN_SUCCESS':
      console.log('login success', action.payload)

      const userObj = action.payload.user;
      const usid = userObj.usid;
      const displayName = userObj.displayName;
      const photoURL = userObj.photoURL;
      const email = userObj.email;

      const loginCredentialValue = {
        usid,
        displayName,
        photoURL,
        email
      }

      return {
        ...state,
        loginCredentialValue
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

    default:
      return state;


  }
}



export default authReducer;