
export const selectSection = (section) => {
  return (dispatch, getState) => {
// middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'SECTION_SELECTED',
      payload: section
    })

  }
}

