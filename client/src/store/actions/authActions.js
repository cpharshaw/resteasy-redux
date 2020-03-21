export const signIn = (credentials) => {

  return (dispatch, getState, { getFirebase }) => {

    const firebase = getFirebase();

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        
        const token = result.credential.accessToken;
        const uid = user.uid;
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const errorCode = null;
        const errorMessage = null;
        // const email = null;
        const credential = null;        
        
        console.log('log in success, user: ', photoURL)

        const loginObj = {
          token,
          uid,
          displayName,
          email,
          photoURL,
          errorCode,
          errorMessage,
          email,
          credential
        }
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: loginObj
        })        
      })
      .catch(error => {

        console.log('log in error, user: ', errorCode, errorMessage)

        const token = null;
        const uid = null;
        const displayName = null;
        // const email = null;
        const photoURL = null;
        
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;

        const loginObj = {
          token,
          uid,
          displayName,
          email,
          photoURL,
          errorCode,
          errorMessage,
          email,
          credential
        }

        dispatch({
          type: 'LOGIN_ERROR',
          payload: loginObj
        })
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