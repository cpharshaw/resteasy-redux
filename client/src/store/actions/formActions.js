
export const formNext = () => {
  return (dispatch, getState) => {
// middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'FORM_NEXT'
    })

  }
}

export const formPrev = () => {
  return (dispatch, getState) => {
// middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'FORM_PREV'
    })

  }
}

