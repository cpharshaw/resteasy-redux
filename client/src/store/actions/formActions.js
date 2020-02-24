
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

export const resetForm = () => {
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'FORM_RESET'
    })
  }
}



export const locationChosen = (input) => {
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'LOCATION_CHOSEN',
      payload: input
    })
  }
}


export const radioSelected = (input) => {
  // console.log("radio clicked", input.target);

  const target = input.target;
  const name = target.name;
  const value = target.value;

  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'RADIO_SELECTED',
      payload: { name, value }
    })
  }
}

export const checkboxClicked = (input) => {
  // console.log("clicked check", input.target);

  const target = input.target;
  const name = target.name;
  const value = target.checked;
  // const checked = target.checked

  return (dispatch, getState) => {
    dispatch({
      type: 'CHECKBOX_CLICKED',
      payload: { name, value }
    })
  }
}

export const dropdownSelected = (input) => {

  // console.log("input: ", input);
  const target = input.target;
  const name = target.name;
  const value = target.value;

  // console.log("target", target);
  // console.log("name", name);
  // console.log("value", value);

  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'DROPDOWN_SELECTED',
      payload: { name, value }
    })
  }
}

export const feeChosen = (input) => {

  // console.log("input: ", input);
  // const target = input.target;
  const name = "formFeeDisplayValue";
  const value = input;
  // const value = target.value;

  // console.log("target", target);
  // console.log("name", name);
  // console.log("value", value);

  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'FEE_CHOSEN',
      payload: { name, value }
    })
  }
}

export const textEntered = (input) => {

  const target = input.target;
  const name = target.name;
  const value = target.value;

  // console.log(name, value)

  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'TEXT_ENTERED',
      payload: { name, value }
    })
  }
}



export const photoInput = (photoObj) => {

  // console.log("photoInput executed: ", photoObj);
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'PHOTO_SELECTED',
      payload: photoObj
    })
  }
}


export const deletePhoto = (photoArr) => {
  // console.log("deletePhoto executed: ", photoArr);
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'PHOTO_DELETED',
      payload: photoArr
    })
  }
}




