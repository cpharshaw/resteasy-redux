export const createReview = (review) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to DB

    const firestore = getFirestore();

    const profile = getState().firebase.profile;

    const authorId = getState().firebase.auth.uid;

    firestore.collection('reviews').add({
      ...review,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    })
      .then(() => {
        dispatch({ type: 'CREATE_REVIEW', review })
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_REVIEW_ERROR', err })
      })

  }
} 