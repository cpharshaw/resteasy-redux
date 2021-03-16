
export const storeSettingsUnitsOfMeasure = (newUnitOfMeasure) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();
    const state = getState();
    const uid = state.firebase.auth.uid;

    firestore.collection('users').doc(uid).update({ preferredUnitOfMeasure: newUnitOfMeasure })
      .then(res => {
        dispatch({
          type: 'SETTINGS_UNITSOFMEASURE_RECEIVED',
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


export const storeSettingsGenderPreference = (newGenderPreference) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();
    const state = getState();
    const uid = state.firebase.auth.uid;

    firestore.collection('users').doc(uid).update({ preferredGender: newGenderPreference })
      .then(res => {
        dispatch({
          type: 'SETTINGS_GENDERPREFERENCE_RECEIVED',
          payload: newGenderPreference,
        })
      })

    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
  }
}
