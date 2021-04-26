
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

export const mapListModalToggled = (mapListModalSelected) => {
  // console.log("mapListModalToggled executed ---> ", mapListModalSelected);
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'MAPLIST_MODAL_TOGGLED',
      payload: mapListModalSelected
    })
  }
}

export const closeMapListModals = () => {
  // console.log("closeMapListModals executed");
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'CLOSE_MAPLIST_MODALS',
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