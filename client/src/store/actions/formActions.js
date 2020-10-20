
import axios from 'axios';


export const submitForm = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let processing = true;
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    const firestore = getFirestore();
    const formState = getState().formState;
    const authState = getState().auth;

    const finalPhotosArr = [];

    console.log("submitForm formState results: ", formState);
    console.log("submitForm authState results: ", authState);

    // const photosArr = photosArr => {
    console.log("submitForm authState results: ", authState);

    formState.photosArrValue.forEach((file, i) => {
      const fileSrc = file.src;
      // console.log("photo file src: ", fileSrc);
      const config = {
        headers: { "X-Requested-With": "XMLHttpRequest" }
      };
      const formData = new FormData();
      formData.append('file', fileSrc);
      formData.append('upload_preset', "rnpjoamq");
      axios.post("https://api.cloudinary.com/v1_1/resteasyredux/upload", formData, config)
        .then(res => {
          console.log(i, formState.photosArrValue.length, res);
          finalPhotosArr.push(res.data.secure_url);

          if (i+1 === formState.photosArrValue.length) {

            const review = {

              basicInfo: {
                timeOfVisit: new Date(),
                locationState: formState.formLocationValue.stateCode,
                restroomUsed: formState.formRestroomTypeValue,
                locationName: formState.formLocationValue.name,
                locationState: formState.formLocationValue.stateCode,
                locationZip: formState.formLocationValue.zip,
                locationCountry: formState.formLocationValue.country,
                outOfOrder: formState.formOutOfOrderValue,
                locationNotes: formState.formLocationNotesValue,
                locationCategory: formState.formLocationValue.category,
                locationCity: formState.formLocationValue.city
              },
      
              comments: formState.formCommentsValue,
      
              features: {
                genderNeutral: formState.formGenderNeutralValue,
                babyStation: formState.formBabyChangeValue,
                accessible: formState.formHandicappedValue,
                price: formState.formFeeValue,
                admission: formState.formAdmissionValue,
                cleaningSchedule: formState.formScheduleValue
              },
      
              locationID: formState.formLocationValue.id,
      
              photos: finalPhotosArr,
      
              scores: {
                cleanliness: formState.formCleanlinessValue,
                style: formState.formStyleValue,
                comfort: formState.formComfortValue,
                safety: formState.formSafetyValue,
                privacy: formState.formPrivacyValue
              },
      
              userID: authState.loginCredentialValue.uid
            };
      
            firestore.collection('reviews').add({
              review
            })
              .then(() => {
                console.log("submitted this review: ", review)
                dispatch({ type: 'FORM_SUBMITTED', payload: review })
              })
              .catch(err => {
                console.error("error in call to firestore", err)
                console.log("errored review in firestore", review)
                dispatch({ type: 'FORM_SUBMITTED_ERROR', payload: err })
              });
          }


        })
        .catch(err => {
          console.error(err)
          // console.error("error in call to cloudinary", err)
          // console.log("errored review in cloudinary", review)
        })
    });

    // };

  }
}


export const formNext = (outOfOrderInd) => {
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'FORM_NEXT',
      payload: outOfOrderInd
    })
  }
}

export const formPrev = (outOfOrderInd) => {
  return (dispatch, getState) => {
    // middleware allows for pausing dispatch to get data asyncronously if need-be, then resuming dispatch
    dispatch({
      type: 'FORM_PREV',
      payload: outOfOrderInd
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
  console.log("location chosen, action: ", input)
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




