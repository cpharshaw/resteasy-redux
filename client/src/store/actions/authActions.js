import { firestore } from "firebase";


export const saveUnitsPreference = (newUnitOfMeasure) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();
    const state = getState();
    const uid = state.firebase.auth.uid;

    firestore.collection('users').doc(uid)
      .update({ unitsPreference: newUnitOfMeasure })
      .then(res => {
        console.log("units preference saved, response obj ---> ", res);
        dispatch({
          type: 'UNITS_PREFERENCE_RECEIVED',
          payload: newUnitOfMeasure,
        })
      })
    // .catch(err => {
    //   dispatch({
    //     type: 'SETTINGS_UNITSOFMEASURE_ERROR',
    //     payload: err,
    //   })
    // });


    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
  }
}


export const saveGenderPreference = (newGenderPreference) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();
    const state = getState();
    const uid = state.firebase.auth.uid;

    firestore.collection('users').doc(uid)
      .update({ genderPreference: newGenderPreference })
      .then(res => {
        console.log("gender preference saved, response obj ---> ", res);
        return dispatch({
          type: 'GENDER_PREFERENCE_RECEIVED',
          payload: newGenderPreference,
        })
      })

    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
  }
}


export const signIn = (credentials) => {

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log("authAction reached")
    const firebase = getFirebase();
    const firestore = getFirestore();

    const state = getState();

    const currAuth = state.auth.loginCredentialValue;
    // console.log("currAuth1", currAuth)
    if (currAuth) return;
    // console.log("currAuth2", currAuth)
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        // singed in now........

        console.log("sign in result ---> ", result);

        const token = result.credential.accessToken;
        const userFirebase = result.user;

        const uid = userFirebase.uid;
        const displayName = userFirebase.displayName;
        const email = userFirebase.email;
        const photoURL = userFirebase.photoURL;

        const errorCode = null;
        const errorMessage = null;
        const credential = null;


        const completeUserObj = {
          preferences: {
            genderPreference: state.auth.genderPreference,
            unitsPreference: state.auth.unitsPreference,
          },
          loginObj: {
            token,
            displayName,
            photoURL,
            errorCode,
            errorMessage,
            credential,
            uid,
            email
          }
        };

        const currentUser = firebase.auth().currentUser;
        const currentUserMetadata = currentUser.metadata;
        // const currentUser = firebase.auth().currentUser.metadata;
        // const newUser = currentUserMetadata.creationTime === currentUserMetadata.lastSignInTime;
        const newUser = result.additionalUserInfo.isNewUser;
        // console.log("currentUser ---> ", currentUser)
        // console.log("currentUserMetadata ---> ", currentUserMetadata)
        console.log("currentUserMetadata.creationTime ---> ", currentUserMetadata.creationTime)
        console.log("currentUserMetadata.lastSignInTime ---> ", currentUserMetadata.lastSignInTime)

        if (newUser) {

          console.log("new user");

          firestore.collection('users').doc(uid).set({
            email: email,
            uid: uid
          });

          return dispatch({
            type: 'LOGIN_SUCCESS',
            payload: completeUserObj
          });

        }

        console.log("NOT new user");

        const firestoreUsers = firestore.collection('users');

        firestoreUsers.where('uid', '==', uid)
          .get()
          .then(({ docs }) => {
            const userFirestore = docs.map(user => user.data())[0];

            // console.log("userFirestore obj ---> ", userFirestore)

            completeUserObj.preferences.genderPreference = userFirestore.genderPreference;
            completeUserObj.preferences.unitsPreference = userFirestore.unitsPreference;

            return dispatch({
              type: 'LOGIN_SUCCESS',
              payload: completeUserObj
            });
          })

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