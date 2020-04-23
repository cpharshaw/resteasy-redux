
export const storeGoogleAPI = (googleAPI) => {
  // console.log("googleAPI", googleAPI)
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'GOOGLE_API_RECEIVED',
      payload: googleAPI
    })
    // console.log("map stored", map.getBounds());
  }
}


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


export const storeSelectedMarker = (marker) => {
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'MARKER_SELECTED',
      payload: marker
    })
    
  }
}

export const storeBounds = (bounds) => {
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'BOUNDS_RECEIVED',
      payload: bounds
    })
    // console.log("bounds sent", bounds);
  }
}

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

