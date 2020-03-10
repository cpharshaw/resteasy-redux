
export const storeGoogleAPI = (googleAPI) => {
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'GOOGLE_API_RECEIVED',
      payload: googleAPI
    })
    // console.log("map stored", map.getBounds());
  }
}
