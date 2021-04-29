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
// console.log("gender preference saved, response obj ---> ", res);


export const saveGenderPreference = (newGenderPreference) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();
    const state = getState();
    const uid = state.firebase.auth.uid;

    firestore.collection('users').doc(uid)
      .update({ genderPreference: newGenderPreference })
      .then(res => {
        return dispatch({
          type: 'SETTINGS_GENDERPREFERENCE_RECEIVED',
          payload: newGenderPreference,
        })
      })

    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
  }
}

export const storeMapListGenderPreference = (newGenderPreference) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    return dispatch({
      type: 'MAPLIST_GENDERPREFERENCE_RECEIVED',
      payload: newGenderPreference,
    })

  }
}

export const saveFavorite = favoriteData => {
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    return dispatch({
      type: 'NEW_FAVORITE',
      payload: favoriteData,
    })
    // console.log("input received");
  }
}

export const removeFavorite = favoriteData => {
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'REMOVE_FAVORITE',
      payload: favoriteData,
    })
    // console.log("input received");
  }
}


export const signIn = (credentials) => {

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // console.log("authAction reached")
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

        // console.log("sign in result ---> ", result);

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
        // console.log("currentUserMetadata.creationTime ---> ", currentUserMetadata.creationTime)
        // console.log("currentUserMetadata.lastSignInTime ---> ", currentUserMetadata.lastSignInTime)
        // console.log("newuser ---> ", result.additionalUserInfo.isNewUser)
        if (newUser) {

          console.log("new user");

          firestore.collection('users').doc(uid).set({
            email: email,
            uid: uid
          })
            .then(res => {
              return dispatch({
                type: 'LOGIN_SUCCESS',
                payload: completeUserObj
              });
            });


        }

        // console.log("NOT new user");

        const firestoreUsers = firestore.collection('users');
        const firestoreUserReviews = firestore.collection('reviews');

        firestoreUserReviews.where('userID', '==', uid)
          .get()
          .then(userReviewsResponse => {
            const userReviewsResponseData = userReviewsResponse.docs.map(review => review.data());

            firestoreUsers.where('uid', '==', uid)
              .get()
              .then(({ docs }) => {
                const userFirestore = docs.map(user => user.data())[0];

                // console.log("userFirestore obj ---> ", userFirestore)

                completeUserObj.preferences.genderPreference = userFirestore.genderPreference;
                completeUserObj.preferences.unitsPreference = userFirestore.unitsPreference;
                completeUserObj.userReviews = userReviewsResponseData;

                // console.log("completeUserObj.reviews ---> ", completeUserObj.userReviews)

                return dispatch({
                  type: 'LOGIN_SUCCESS',
                  payload: completeUserObj
                });
              })

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