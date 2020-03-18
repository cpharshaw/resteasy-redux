export const signIn = (credentials) => {

  return (dispatch, getState, { getFirebase }) => {

    const firebase = getFirebase();

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        console.log('log in success, user: ', user)

        const loginObj = {
          token,
          user,
          errorCode: null,
          errorMessage: null,
          email: null,
          credential: null
        }


        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: loginObj
        })        
        // ...
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;

        const loginObj = {
          token: null,
          user: null,
          errorCode,
          errorMessage,
          email,
          credential
        }

        dispatch({
          type: 'LOGIN_ERROR',
          payload: loginObj
        })
        // ...
      });



  }

}



export const signOut = () => {

  return (dispatch, getState, { getFirebase }) => {

    const firebase = getFirebase();

    firebase.auth().signOut()
      .then(() => {
        dispatch({
          type: "SIGNOUT_SUCCESS"
        })
      })
      .catch((err) => {
        dispatch({
          type: 'SIGNOUT_ERROR',
          error: err
        })
      })
  }

}