import { firestore } from "firebase";

export const signIn = (credentials) => {

  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firebase = getFirebase();
    const firestore = getFirestore();

    const state = getState();

    const currAuth = state.auth.loginCredentialValue;

    if (currAuth) return;


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

        firestore.collection('users').doc(uid).set({
          email
        });

        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: loginObj
        });

      })
      .catch(error => {

        const token = null;
        const uid = null;
        const displayName = null;
        // const email = null;
        const photoURL = null;
        
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;

        console.log("error code: ", errorCode)
        console.log("error message: ", errorMessage)
        console.log("error email: ", email)
        console.log("error credential: ", credential)

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
          payload: error
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