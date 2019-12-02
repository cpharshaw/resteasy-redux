
export const storeMap = (map) => {
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'MAP_RECEIVED',
      payload: map
    })
    // console.log("map stored", map.getBounds());
  }
}
