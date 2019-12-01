
export const storeCenter = (center) => {
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'CENTER_RECEIVED',
      payload: center
    })
    // console.log("center sent", center);
  }
}

