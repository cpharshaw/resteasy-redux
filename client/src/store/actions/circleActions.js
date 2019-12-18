
export const storeCircle = (circle) => {
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'CIRCLE_RECEIVED',
      payload: circle
    })
    // console.log("circle sent", bounds);
  }
}

