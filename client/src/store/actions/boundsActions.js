
export const storeBounds = (bounds) => {
  return (dispatch, getState) => {
// middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'BOUNDS_RECEIVED',
      payload: bounds
    })
    console.log("bounds sent", bounds)

  }
}

