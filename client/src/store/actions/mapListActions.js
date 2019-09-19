
export const toggleMapList = () => {
  return (dispatch, getState) => {
// middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'MAPLIST_TOGGLED'
    })

  }
}

