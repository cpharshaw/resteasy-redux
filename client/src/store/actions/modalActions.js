
export const modalToggled = (selectedModal) => {
  // console.log("deletePhoto executed: ", photoArr);
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'MODAL_TOGGLED',
      payload: selectedModal
    })
  }
}

export const modalClosed = () => {
  // console.log("deletePhoto executed: ", photoArr);
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'MODAL_CLOSED',
      // payload: selectedModal
    })
  }
}