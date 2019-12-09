
export const storeInput = (input) => {
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'INPUT_RECEIVED',
      payload: input,
    })
    console.log("input received");
  }
}

